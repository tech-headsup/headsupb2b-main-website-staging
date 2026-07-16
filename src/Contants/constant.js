export const Gradient = "bg-gradient-to-b from-[#402A6F] to-[#4A3772]";
export const GradientText = "bg-black"; //bg-gradient-to-r from-[#4A3772] to-[#F2AB1E]

export const query = `
query PostsByPublication($host: String!, $first: Int!, $after: String) {
  publication(host: $host) {
    ...Publication
    posts(first: $first, after: $after) {
      totalDocuments
      edges {
        node {
          ...Post
        }
      }
      pageInfo {
        ...PageInfo
      }
    }
  }
}

fragment Publication on Publication {
  id
  title
  displayTitle
  url
  metaTags
  favicon
  isTeam
  followersCount
  descriptionSEO
  author {
    name
    username
    profilePicture
    followersCount
  }
  ogMetaData {
    image
  }
  preferences {
    logo
    darkMode {
      logo
    }
    navbarItems {
      id
      type
      label
      url
    }
  }
  links {
    twitter
    github
    linkedin
    hashnode
  }
  integrations {
    umamiWebsiteUUID
    gaTrackingID
    fbPixelID
    hotjarSiteID
    matomoURL
    matomoSiteID
    fathomSiteID
    fathomCustomDomain
    fathomCustomDomainEnabled
    plausibleAnalyticsEnabled
  }
}

fragment Post on Post {
  id
  title
  url
  author {
    name
    profilePicture
  }
  coverImage {
    url
  }
  publishedAt
  slug
  brief
}

fragment PageInfo on PageInfo {
  endCursor
  hasNextPage
}
`;

export const googleTagText = "gad_source";

export const DEFAULT_COVER =
  "https://cdn.hashnode.com/res/hashnode/image/upload/v1683525272978/MB5H_kgOC.png?auto=format";

export const BLOGS_ENDPOINT = "https://gql.hashnode.com";
export const PUBLICATION_HOST = "headsupb2b.hashnode.dev";