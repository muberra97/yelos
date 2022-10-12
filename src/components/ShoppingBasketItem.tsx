import { Stack, Button } from 'react-bootstrap'
import { useShoppingBag } from '../context/ShoppingBasketContext'
import storeItems from '../data/data.json'
import { formatterCurrency } from '../utilities/formatterCurrency'

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeItemFromCard } = useShoppingBag()
    const item = storeItems.find((a) => a.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-itemscenter">
            <img src={item.imgURL} style={{ width: '75px', height: '75px', objectFit: 'cover' }} />
            <div className="me-auto">
                <div>
                    {item.name}{' '}
                    {quantity > 1 && (
                        <span className="text-muted" style={{ fontSize: '.70rem' }}>
                            x{quantity}
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: '.75rem' }}>
                    {formatterCurrency(item.price)}
                </div>
            </div>
            <div>{formatterCurrency(item.price * quantity)}</div>
            <Button variant="outline-danger" size="sm" onClick={() => removeItemFromCard(item.id)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-circle-fill"
                    viewBox="0 0 16 16"
                >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
            </Button>
        </Stack>
    )
}
