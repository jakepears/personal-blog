import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import { myLoader } from "@/utils/all";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="mt-2 flex items-center justify-between">
        <ThemeSwitch />
      </div>
      <div className="text-center text-sm">
        Copyright &copy; {new Date().getFullYear()} Jake Pearson. All
        rights reserved.
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>&middot;</span>
      </div>
    </Container>
  );
}
