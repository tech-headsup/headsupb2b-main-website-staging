import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * @typedef {object} ModalPortalProps
 * @property {React.ReactNode} children - The content (e.g., a modal component) to be rendered
 * outside the normal component hierarchy, inside the designated portal root element.
 */

/**
 * 🚪 ModalPortal
 *
 * A utility component that uses **React Portals** to render its children into a specific
 * DOM element outside of the main React component tree.
 *
 * This is crucial for components like modals, tooltips, or popovers that need to render
 * at the highest level of the DOM (e.g., directly under <body>) to avoid being clipped
 * or obscured by parent elements' CSS properties (like z-index or overflow: hidden).
 *
 * The component specifically searches for a DOM element with the ID **"portal"** to serve
 * as the rendering destination.
 *
 * @param {ModalPortalProps} props - The component props.
 * @returns {React.ReactPortal | null} A React Portal containing the children, or null if the
 * designated root element is not found.
 */
export const Portal = ({ children }) => {
  const [portalRoot, setPortalRoot] = useState(null);

  // Find the portal root element once the component mounts
  useEffect(() => {
    // Look for the specified portal container
    const root = document.body
    if (root) {
      setPortalRoot(root);
    } else {
      // Log an error if the required DOM element is missing
   console.error("document.body not found.")
    }
  }, []);

  // Only render the portal content if the root element is found
  if (portalRoot) {
    return createPortal(children, portalRoot);
  }

  // Render nothing until the portal root is available
  return null;
};