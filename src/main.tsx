import ReactDOM from 'react-dom/client';
import App from './App';

const regexp = /kakaotalk/i;

if (navigator.userAgent.toLowerCase().match(regexp)) {
  location.href =
    'kakaotalk://web/openExternal?url=' +
    encodeURIComponent('https://hc-sb-wedding-post.netlify.app/');
} else {
  ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
}
