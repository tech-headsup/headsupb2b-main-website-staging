import { useRef, useState } from 'react';
import { GraphQLClient } from 'graphql-request';
import { BLOGS_ENDPOINT, PUBLICATION_HOST } from '@/Contants/constant';

const SUBSCRIBE_MUTATION = `
  mutation SubscribeToNewsletter($input: SubscribeToNewsletterInput!) {
    subscribeToNewsletter(input: $input) {
      status
    }
  }
`;

// We need the numeric publication ID. We fetch it once using the host.
const GET_PUBLICATION_ID = `
  query GetPublicationId($host: String!) {
    publication(host: $host) {
      id
    }
  }
`;

const client = new GraphQLClient(BLOGS_ENDPOINT);

export const SubscribeForm = () => {
  const [status, setStatus] = useState(null); // null | 'PENDING'
  const [requestInProgress, setRequestInProgress] = useState(false);
  const inputRef = useRef(null);

  const subscribe = async () => {
    const email = inputRef.current?.value;
    if (!email) return;

    setRequestInProgress(true);

    try {
      // Resolve publication ID on-the-fly (cached by browser after first call)
      const pubData = await client.request(GET_PUBLICATION_ID, {
        host: PUBLICATION_HOST,
      });
      const publicationId = pubData?.publication?.id;

      if (!publicationId) {
        throw new Error('Could not resolve publication ID');
      }

      const data = await client.request(SUBSCRIBE_MUTATION, {
        input: { publicationId, email },
      });

      setStatus(data?.subscribeToNewsletter?.status);
    } catch (error) {
      const message = error?.response?.errors?.[0]?.message;
      if (message) {
        window.alert(message);
      }
    } finally {
      setRequestInProgress(false);
    }
  };

  return (
    <>
      {!status && (
        <div className="relative w-full rounded-full bg-white p-2 dark:bg-neutral-950">
          <input
            ref={inputRef}
            type="email"
            placeholder="john@doe.com"
            className="left-3 top-3 w-full rounded-full p-3 text-base text-black outline-none focus:outline-none dark:bg-neutral-950 dark:text-neutral-50"
          />
          <button
            disabled={requestInProgress}
            onClick={subscribe}
            className="absolute right-3 top-3 rounded-full bg-[#4A3772] px-3 py-2 text-white disabled:cursor-not-allowed disabled:opacity-80"
          >
            {requestInProgress ? 'Subscribing…' : 'Subscribe'}
          </button>
        </div>
      )}

      {status === 'PENDING' && (
        <div className="relative w-full p-2 text-center">
          <p className="font-bold text-green-600 dark:text-green-500">Almost there!</p>
          <p className="font-medium text-slate-600 dark:text-neutral-300">
            Check your inbox for a confirmation email and click{' '}
            <strong>&quot;Confirm and Subscribe&quot;</strong> to complete your subscription. Thanks
            for joining us!
          </p>
        </div>
      )}
    </>
  );
};
