import { useTranslation } from "../i18n";

export default async function Home({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const { t } = await useTranslation(lng);

  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-black text-2xl lg:text-5xl font-black">
        {t("title")}
      </h1>
    </main>
  );
}
