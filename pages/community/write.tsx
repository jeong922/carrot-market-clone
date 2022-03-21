import type { NextPage } from "next";
import Button from "../../components/button";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="Write Post">
      <form className="px-4 py-10">
        <TextArea name="description" placeholder="Ask a question!" required />
        <Button text="Submit"></Button>
      </form>
    </Layout>
  );
};

export default Write;
