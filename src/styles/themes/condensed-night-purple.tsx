import React from "react";
export default function CondensedNightPurpleTheme() {
  return (
    <style jsx global>
      {`
        @charset "UTF-8";

        .markdown-body {
          line-height: 1.75;
          font-family: -apple-system-font, BlinkMacSystemFont, "Helvetica Neue",
            "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI",
            "Microsoft YaHei", Arial, sans-serif;
          letter-spacing: 2px;
          background-image: linear-gradient(
              90deg,
              rgba(50, 0, 0, 0.05) 3%,
              rgba(0, 0, 0, 0) 3%
            ),
            linear-gradient(
              360deg,
              rgba(50, 0, 0, 0.05) 3%,
              rgba(0, 0, 0, 0) 3%
            );
          background-size: 20px 20px;
          background-position: center center;
          word-break: break-word;
          font-weight: 400;
          font-size: 15px;
          overflow-x: hidden;
          color: #333;
        }

        .markdown-body h1 {
          font-size: 23px;
          margin-bottom: 5px;
          font-weight: bold;
          padding-left: 10px;
          border-left: 5px solid #773098;
        }

        .markdown-body h2 {
          font-size: 19px;
          font-weight: bold;
          padding-left: 10px;
          border-left: 5px solid #916dd5;
        }

        .markdown-body h3 {
          font-size: 17px;
          font-weight: bold;
          padding-left: 10px;
          border-left: 5px solid #d89cf6;
        }

        .markdown-body h4 {
          font-size: 16px;
        }

        .markdown-body h5 {
          font-size: 15px;
        }

        .markdown-body h6 {
          font-size: 14px;
          margin-top: 5px;
        }

        .markdown-body p {
          line-height: inherit;
          margin-top: 22px;
          margin-bottom: 22px;
        }

        .markdown-body img {
          display: block;
          max-width: 100%;
          margin: 1em 0;
          border-radius: 6px;
          box-shadow: 2px 4px 7px #999;
          user-select: none;
        }

        .markdown-body hr {
          border-top: 1px solid #ddd;
          border-bottom: none;
          border-left: none;
          border-right: none;
          margin-top: 32px;
          margin-bottom: 32px;
        }

        .markdown-body code {
          padding: 0.2em 0.5em;
          font-weight: bold;
          font-family: -apple-system-font, BlinkMacSystemFont, "Helvetica Neue",
            "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI",
            "Microsoft YaHei", Arial, sans-serif;
          font-size: 1em;
          color: #916dd5;
          word-break: break-word;
          overflow-x: auto;
          background-color: none;
          border-radius: 2px;
        }

        .markdown-body pre {
          overflow: auto;
          position: relative;
          line-height: 1.75;
        }

        .markdown-body pre > code {
          display: block;
          font-family: -apple-system-font, BlinkMacSystemFont, "Helvetica Neue",
            "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI",
            "Microsoft YaHei", Arial, sans-serif;
          font-weight: normal;
          font-size: 0.9em;
          padding: 16px 12px;
          margin: 0;
          color: #333;
          word-break: normal;
          overflow-x: auto;
          background: #f8f8f8;
          scroll-behavior: smooth;
        }

        .markdown-body a {
          text-decoration: none;
          color: #916dd5;
          font-weight: bold;
          border-bottom: 1px solid #916dd5;
        }

        .markdown-body a:hover,
        .markdown-body a:active {
          color: #773098;
        }

        .markdown-body table {
          display: inline-block !important;
          font-size: 14px;
          width: auto;
          max-width: 100%;
          overflow: auto;
          border: solid 1px #916dd5;
          border-collapse: collapse;
        }

        .markdown-body thead {
          background-color: #916dd5;
          color: #fff;
          text-align: left;
        }

        .markdown-body th,
        .markdown-body td {
          padding: 12px 7px;
          line-height: 24px;
          border: solid 1px #916dd5;
        }

        .markdown-body td {
          min-width: 120px;
        }

        .markdown-body blockquote {
          color: #666;
          padding: 1px 23px;
          margin: 22px 0;
          border-left: 4px solid #d89cf6;
          background-color: #f4eeff;
        }

        .markdown-body blockquote::after {
          display: block;
          content: "";
        }

        .markdown-body blockquote > p {
          margin: 10px 0;
          line-height: 26px;
        }

        .markdown-body ol,
        .markdown-body ul {
          padding-left: 28px;
          list-style-type: circle;
        }

        .markdown-body ol li,
        .markdown-body ul li {
          margin-bottom: 0;
          list-style: inherit;
        }

        .markdown-body ol li .task-list-item,
        .markdown-body ul li .task-list-item {
          list-style: none;
        }

        .markdown-body ol li .task-list-item ul,
        .markdown-body ol li .task-list-item ol,
        .markdown-body ul li .task-list-item ul,
        .markdown-body ul li .task-list-item ol {
          margin-top: 0;
        }

        .markdown-body ol ul,
        .markdown-body ol ol,
        .markdown-body ul ul,
        .markdown-body ul ol {
          margin-top: 3px;
        }

        .markdown-body ol li {
          padding-left: 6px;
        }

        .markdown-body b,
        .markdown-body strong {
          color: #916dd5;
          font-weight: bold;
        }

        .markdown-body b::before,
        .markdown-body strong::before {
          content: "「";
        }

        .markdown-body b::after,
        .markdown-body strong::after {
          content: "」";
        }

        .markdown-body i,
        .markdown-body em {
          color: #916dd5;
        }

        @media (max-width: 720px) {
          .markdown-body h1 {
            font-size: 24px;
          }

          .markdown-body h2 {
            font-size: 20px;
          }

          .markdown-body h3 {
            font-size: 18px;
          }
        }
      `}
    </style>
  );
}
