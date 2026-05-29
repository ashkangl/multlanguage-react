import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import {
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";

const languages = [
  {
    code: "en",
    name: "English",
    dir: "ltr",
    flag: "🇺🇸",
  },
  {
    code: "es",
    name: "Spanish",
    dir: "ltr",
    flag: "🇪🇸",
  },
  {
    code: "fr",
    name: "French",
    dir: "ltr",
    flag: "🇫🇷",
  },
  {
    code: "fa",
    name: "فارسی",
    dir: "rtl",
    flag: "🇮🇷",
  },
];

const Home = () => {

  const { t, i18n } = useTranslation();

  document.body.dir = i18n.dir();

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) ||
    languages[0];

  const handleChange = (event) => {
    i18next.changeLanguage(event.target.value);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #111827 50%, #020617 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >

      <div
        style={{
          width: "100%",
          maxWidth: "850px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "28px",
          padding: "40px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        }}
      >

        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >

          <div>

            <h1
              style={{
                color: "#fff",
                fontSize: "42px",
                fontWeight: "800",
                marginBottom: "10px",
              }}
            >
              🌍 Multi Language App
            </h1>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "18px",
                lineHeight: "32px",
              }}
            >
              Modern React + i18next language switcher with RTL support
            </p>

          </div>


          {/* Language Selector */}
          <FormControl
            sx={{
              minWidth: 200,
              background: "rgba(255,255,255,0.06)",
              borderRadius: "16px",
            }}
          >

            <Select
              value={i18n.language}
              onChange={handleChange}
              sx={{
                color: "#fff",
                borderRadius: "16px",

                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(255,255,255,0.15)",
                },

                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#6366f1",
                },

                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#818cf8",
                },

                ".MuiSvgIcon-root ": {
                  fill: "white !important",
                },
              }}
            >

              {languages.map((lang) => (
                <MenuItem
                  key={lang.code}
                  value={lang.code}
                >
                  {lang.flag} {lang.name}
                </MenuItem>
              ))}

            </Select>

          </FormControl>

        </div>


        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >

          <h2
            style={{
              color: "#fff",
              fontSize: "34px",
              fontWeight: "700",
            }}
          >
            {t("welcome")}
          </h2>

          <h3
            style={{
              color: "#cbd5e1",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            {t("hello")}
          </h3>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "18px",
              lineHeight: "34px",
            }}
          >
            {t("this is an english app")}
          </p>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "18px",
              lineHeight: "34px",
            }}
          >
            {t("this is a multi language app")}
          </p>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "18px",
              lineHeight: "34px",
            }}
          >
            {t("you can change the language of app manually")}
          </p>

        </div>


        {/* Footer */}
        <div
          style={{
            marginTop: "50px",
            paddingTop: "25px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >

          <span
            style={{
              color: "#64748b",
            }}
          >
            Current Language:
          </span>

          <span
            style={{
              color: "#fff",
              fontWeight: "600",
            }}
          >
            {currentLanguage.flag} {currentLanguage.name}
          </span>

        </div>

      </div>

    </div>
  );
};

export default Home
