import Card from './Card';
export default function Cards(props:any) {
  return (
    <div id="cardsDiv">
      <section className="cards">
        {
          props.props.map((x:any) => {
            return (
              <Card props={x} key={x.id}/>
            )
          })
        }
      </section>
    </div>
  );
}