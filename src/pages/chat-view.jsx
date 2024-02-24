import { Helmet } from 'react-helmet-async';

import { ChatView } from 'src/sections/chat-analyser/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <ChatView />
    </>
  );
}
