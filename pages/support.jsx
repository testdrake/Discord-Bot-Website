import { useRouter } from 'next/router';

export default function support() {
  const router = useRouter();

  return null;
}

export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: 'https://discord.gg/h8dY8SF7RX' });
  res.end();

  return {
    props: {},
  };
}
