import './product.css';

function Product({ title, price, features, feat, option3, feats }) {
    let isDiscount=price>3000?"5%":<a href="/">getDiscount</a>;
    let style={backgroundColor:"yellow"};




    return (
        <div className="product">
            <h3>{title}</h3>
            <h5>Price: ₹{price}</h5>
            <p style={style}>{isDiscount }</p>




            {/* Display features array */}
            {features && (
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            )}

            {/* Display feat object */}
            {feat && (
                <div>
                    <p>{feat.a}</p>
                    <p>{feat.b}</p>
                    <p>{feat.c}</p>
                </div>
            )}

            {/* Display option3 object */}
            {option3 && <p>{option3.b}</p>}

            {/* Display feats array of <li> elements */}
            {feats && (
                <ul>
                {feats.map((feature,index)=>(
                    <li key={index}> {feature}</li>
                    )


                )}
                </ul>
            )}




        </div>
    );
}

export default Product;
