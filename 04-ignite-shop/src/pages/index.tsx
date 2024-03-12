import { styled } from "../styles";

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 4,
  padding: '4px 8px',
  border: 0,

  span: {

  }
})

export default function Home() {
  return (
    <>
      <Button>enviar</Button>
    </>
  );
}
