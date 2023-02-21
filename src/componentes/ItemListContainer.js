import "../App.css"

function ItemListContainer({greeting}) {
    return (
        <div className="contenedor-item-list">
            <h1>{greeting}</h1>
        </div>
    );
};

export default ItemListContainer;
