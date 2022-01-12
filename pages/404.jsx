import BaseLayout from "../components/BaseLayout";
import Seo from "../components/Seo";

export default function PageNotFound() {
  return (
    <BaseLayout>
      <Seo title="Page Not Found" />
      <div className="container flex items-center justify-center h-full">
        <h1>Page not found.</h1>
      </div>
    </BaseLayout>
  );
}
