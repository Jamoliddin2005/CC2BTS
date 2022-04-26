import React from 'react'
import "./Newss.css"
import New from './New/New'
const Newss = ({ searchTerm, dark }) => {


    const news = [
        {
            name: `BE "GLAREOUS" VALID 87% [22 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `TR "BACCHEION" VALID 81% [11 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `PL "BACCHEION" VALID 81% [11 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `OM "BACCHEION" VALID 81% [11 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `MX "BACCHEION" VALID 81% [11 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `HR "BACCHEION" VALID 81% [11 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `FI "BACCHEION" VALID 81% [11 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `DE "BACCHEION" VALID 81% [11 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `BR "BACCHEION" VALID 81% [11 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `BE "BACCHEION" VALID 81% [11 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `AR "BACCHEION" VALID 81% [11 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `MIX "BACCHEION" VALID 81% [11 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `NO "INTROMITTENCE" VALID 85% [13 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `FR "INTROMITTENCE" VALID 85% [13 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `SE "INTROMITTENCE" VALID 85% [13 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `IT "INTROMITTENCE" VALID 85% [13 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `IE "INTROMITTENCE" VALID 85% [13 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `GB "INTROMITTENCE" VALID 85% [13 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `ES "INTROMITTENCE" VALID 85% [13 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `DK "INTROMITTENCE" VALID 85% [13 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `CZ "INTROMITTENCE" VALID 85% [13 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `CH "INTROMITTENCE" VALID 85% [13 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `RO "INTROMITTENCE" VALID 85% [13 Apr]staniol`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
        {
            name: `test burger`,
            Refund: 'YES',
            total: 21,
            price: 0.14
        },
    ]

    return (
        <div className='newsDiv'>
            {news.filter((val) =>
                val.name.toLowerCase().includes(searchTerm)
            ).map((item, index) => (
                <New key={index} name={item.name} Refund={item.Refund} total={item.total} price={item.price} dark={dark} />
            ))}
        </div>
    )
}

export default Newss