import { GetServerSideProps } from "next";

const ServerPage = (props: any) => {
  return (
    <div>
      <p>Server {props.name}</p>
    </div>
  );
};

export default ServerPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // tudo aqui é do lado do servidor
  return {
    props: {
      name: 'Victor',
    }
  };
}
