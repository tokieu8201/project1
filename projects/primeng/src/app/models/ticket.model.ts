export interface Ticket {
    id: number,
    status: string,
    delivered: Date,
    returned: Date,
    chemical: string,
    supplier: string,
    trailer: number,
    delivered_qty: number,
    current_qty: number,
    returned_qty: number,
    net: number,
    bol: string,
    equipment: string,
    delivery_type: string,
    pad: string
}