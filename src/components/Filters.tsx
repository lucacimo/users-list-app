import React from "react";
import { IFilters } from "../types/types.ts";
import { useTranslation } from "react-i18next";

interface FiltersProps {
  filters: IFilters;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filters = ({ filters, onChange }: FiltersProps) => {
  const { t } = useTranslation();
  return (
    <aside className="w-64 h-[400px] bg-white rounded-lg shadow p-4 flex-shrink-0 flex flex-col justify-between">
      <div>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">
            {t("filters.name.label")}
          </label>
          <input
            id="name"
            name="name"
            placeholder={t("filters.name.placeholder")}
            value={filters.name}
            onChange={onChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            {t("filters.email.label")}
          </label>
          <input
            id="email"
            name="email"
            placeholder={t("filters.email.placeholder")}
            value={filters.email}
            onChange={onChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div className="mb-4">
          <span className="block font-medium mb-2">
            {t("filters.status.label")}
          </span>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              name="status"
              value="active"
              checked={filters.status.includes("active")}
              onChange={onChange}
              className="mr-2"
            />
            {t("filters.status.active")}
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="status"
              value="inactive"
              checked={filters.status.includes("inactive")}
              onChange={onChange}
              className="mr-2"
            />
            {t("filters.status.inactive")}
          </label>
        </div>

        <div className="mb-4">
          <span className="block font-medium mb-2">
            {t("filters.gender.label")}
          </span>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              name="gender"
              value="male"
              aria-label="Male"
              checked={filters.gender.includes("male")}
              onChange={onChange}
              className="mr-2"
            />
            {t("filters.gender.male")}
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="gender"
              value="female"
              aria-label="Female"
              checked={filters.gender.includes("female")}
              onChange={onChange}
              className="mr-2"
            />
            {t("filters.gender.female")}
          </label>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
