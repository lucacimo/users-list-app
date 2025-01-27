import { Link, useLocation } from "react-router-dom";
import Page from "../components/Page.tsx";
import { IUser } from "../types/types.ts";
import { useTranslation } from "react-i18next";
const UserDetail = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { user } = (location.state as { user: IUser }) || {};

  if (!user) {
    return (
      <Page>
        <Link to="/" className="text-blue-500 no-underline mb-4 inline-block">
          &larr; {t("detail.back")}
        </Link>
        <div className="w-full bg-white p-8">
          <p className="text-red-500 mb-4">{t("details.error")}</p>
        </div>
      </Page>
    );
  }

  return (
    <Page>
      <Link to="/" className="text-blue-500 no-underline mb-4 inline-block">
        &larr; {t("detail.back")}
      </Link>
      <div className="flex justify-center">
        <div className="w-full bg-white p-8 rounded">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{user.name}</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <strong className="text-gray-600">
                {t("filters.email.label")}
              </strong>
              <p className="text-gray-800">{user.email}</p>
            </div>
            <div>
              <strong className="text-gray-600">
                {t("filters.status.label")}
              </strong>
              <p className="text-gray-800">{user.status}</p>
            </div>
            <div>
              <strong className="text-gray-600">
                {t("filters.gender.label")}
              </strong>
              <p className="text-gray-800">{user.gender}</p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default UserDetail;
