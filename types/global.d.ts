// Add TypeScript declaration for the getWaitlist global object
interface Window {
  getWaitlist?: {
    init: () => void
  }
}
