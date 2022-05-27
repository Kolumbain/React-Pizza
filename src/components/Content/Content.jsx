import ContentTop from "./ContentTop/ContentTop"
import PizzaBlock from "./PizzaBlock/PizzaBlock"

function Content ({pizzas, setPizzas}) {
    return (
        <div className="content">
        <div className="container">
            <ContentTop />
            <h2 className="content__title">Все пиццы</h2>
            <PizzaBlock pizzas={pizzas} setPizzas={setPizzas} />
        </div>
    </div>
    )
};

export default Content