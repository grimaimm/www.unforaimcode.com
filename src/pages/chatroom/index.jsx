import { NextSeo } from "next-seo";

import { Container } from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Chat from "@/modules/chatroomPage";

const PAGE_TITLE = "Chat Room"
const PAGE_DESCRIPTION =
  "Leave whatever you like to say, suggestions, questions or anything!"

const ChatroomPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Muhammad Rahim`} />
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Chat />
      </Container>
    </>
  )
}

export default ChatroomPage;
