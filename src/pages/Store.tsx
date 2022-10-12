
import items from "../data/data.json"
import {Row, Col} from "react-bootstrap"
import { ProductListItem } from "../components/ProductListItem"

export function Store() {
    return (
    <>
    <h3>Yeloş'un Dükkanı</h3>
    <br />
    <Row md={2} xs={1} lg={3} className="g-3">
        {items.map(item=>(
            // <Col>{JSON.stringify(item)}</Col>
            <Col key={item.id}>
                <ProductListItem {...item}/>
            </Col>
        ))}
    </Row>
    </>
    )
}