
import React from 'react';

export const Ga = () => {
  return (
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-DX6Z7BZKTT"
    >
      gt('js', new Date());
      gt('config', 'G-DX6Z7BZKTT');
    </script>
  );
};