import { Fragment, useContext, useEffect } from "react";
import { PageTitleContext } from "../../../contexts/PageTitleProvider";
import ApiKey from "../../Common/ApiKey";

export default function CompletionPage() {
  const { setTitle } = useContext(PageTitleContext);

  useEffect(() => {
    setTitle?.("Chat Completion API");
  }, []);

  return (
    <Fragment>
      <ApiKey />
    </Fragment>
  );
}
