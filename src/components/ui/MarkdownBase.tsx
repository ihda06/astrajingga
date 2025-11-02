import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

import CodeBlock from "./CodeBlock";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  children: string;
}

interface TableProps {
  children: ReactNode;
}

const Table = ({ children }: TableProps) => (
  <div className="table-container">
    <table className="table w-full">{children}</table>
  </div>
);

const MarkdownBase = ({ children }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm as any]}
      components={{
        a: (props) => (
          <a
            className="cursor-pointer text-teal-600 hover:text-teal-400 hover:underline"
            target="_blank"
            {...props}
          />
        ),
        p: (props) => <div {...props} className="font-sans py-2" />,
        h1: (props) => (
          <h1 className="py-6 font-sans text-2xl font-bold " {...props} />
        ),
        h2: (props) => (
          <h2 className="py-4 font-sans text-xl font-bold " {...props} />
        ),
        h3: (props) => (
          <h3 className="py-4 text-lg font-bold leading-snug" {...props} />
        ),
        h4: (props) => (
          <h4 className="py-4 font-sans text-lg font-bold " {...props} />
        ),
        h5: (props) => (
          <h5 className="font-sans text-base font-bold " {...props} />
        ),
        h6: (props) => (
          <h6 className="font-sans text-sm font-bold " {...props} />
        ),

        ul: (props) => (
          <ul
            className="list-disc space-y-3 pb-5 pl-10 pt-2 font-sans"
            {...props}
          />
        ),
        ol: (props) => (
          <ol
            className="list-decimal space-y-3 pb-5 pl-10 font-sans"
            {...props}
          />
        ),
        code: (props) => <CodeBlock {...props} />,
        blockquote: (props) => (
          <blockquote
            className="text-md rounded-lg border-l-[5px] border-neutral-700 border-l-cyan-500 bg-neutral-100 py-3 pl-6 text-cyan-800 "
            {...props}
          />
        ),
        table: (props) => <Table {...props}>{props.children}</Table>,
        th: (props) => (
          <th className="border px-3 py-1 text-left ">{props.children}</th>
        ),
        td: (props) => <td className="border px-3  py-1 ">{props.children}</td>,
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default MarkdownBase;
