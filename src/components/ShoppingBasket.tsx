import { Offcanvas, OffcanvasTitle, Stack } from "react-bootstrap";
import { useShoppingBag } from "../context/ShoppingBasketContext";
import { formatterCurrency } from "../utilities/formatterCurrency";
import { CartItem } from "./ShoppingBasketItem";
import storeItems from '../data/data.json'

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps){
    const {closeBasket: closeCard, basketItems: cardItems} = useShoppingBag()
    return(
        <Offcanvas show={isOpen} placement="end" onHide={closeCard}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Sepetim</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cardItems.map(item => (
                        <CartItem key={item.id} {...item}/>
                    ))}
                    <div className="ms-auto fw-bold fs-7">
                        Ürünün Toplamı: {formatterCurrency(cardItems.reduce((total, cardItem) =>
                        {
                            const item = storeItems.find((a) => a.id === cardItem.id)
                            return total + (item?.price|| 0) * cardItem.quantity
                        },0)
                        )}

                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}