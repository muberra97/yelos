import { Button, Card, CardImg } from 'react-bootstrap'
import { useShoppingBag } from '../context/ShoppingBasketContext'
import { formatterCurrency } from '../utilities/formatterCurrency'

type ShoppingListItemProps = {
    id: number
    name: string
    price: number
    imgURL: string
}

export function ProductListItem({ id, name, price, imgURL }: ShoppingListItemProps) {
    const {getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeItemFromCard} = useShoppingBag()
    const quantity = getItemQuantity(id)
    return (
        <Card className="h-100">
            <CardImg variant="top" src={imgURL} width="%50" height="%50" style={{ objectFit: 'cover' }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatterCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100 btn btn-dark" onClick={()=>increaseItemQuantity(id)}> Sepete Ekle </Button>
                    ) : (
                        <div className="d-flex align-items-center flex-column" style={{ gap: '.5rem' }}>
                            <div className="d-flex align-items-center justify-content-center" style={{ gap: '.5rem' }}>
                                <Button className="btn btn-dark" onClick={()=>decreaseItemQuantity(id)} >-</Button>
                                <div>
                                    {' '}
                                    Sepette
                                    <span className="fs-5"> <b>{quantity}</b></span> adet ürün var
                                </div>
                                <Button className=" btn btn-dark" onClick={()=>increaseItemQuantity(id)}>+</Button>
                            </div>
                            <Button variant="danger" size="sm" onClick={()=>removeItemFromCard(id)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-trash"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                    />
                                </svg>
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}


