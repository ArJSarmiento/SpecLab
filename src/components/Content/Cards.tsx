import Card from './Card';
export default function Cards({items} : any) {
  return (
    <div id="cardsDiv">
      <section className="cards">
        {
          items.map((x:any) => {
            return (
              <Card item={x} key={x.id}/>
            )
          })
        }
      </section>
    </div>
  );
}