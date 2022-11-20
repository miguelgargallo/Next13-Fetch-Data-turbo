export const Footer = () => {
    return (
      <footer className="bg-white py-8 text-center">
        <div>
          <a>
            Made with ❤️ by{" "}
            <a
              href="https://twitter.com/miguelgargallo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue text-indigo-600"
            >
              Miguel Gargallo
            </a>
            .
          </a>
        </div>
        <div>
          <a>
            2022 ©{" "}
            <a
              href="https://huggingface.co/spaces/superdatas/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue text-indigo-600"
            >
              Pylar AI creative ML license
            </a>
            .
          </a>
          
        </div>
      </footer>
    );
  };
  