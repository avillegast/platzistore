import React, {useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import styles from '@styles/MyOrder.module.scss';
import flecha from '@icons/flechita.svg';

const MyOrder = () => {
	const {state } = useContext(AppContext);
	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};

	return (
		<aside className={styles.MyOrder}>
			<div className={styles['title-container']}>
				<Image src={flecha} alt="arrow"  />
				<p className={styles.title}>My order</p>
			</div>
			<div className={styles['my-order-content']}>
				{state.cart.map((product,index) => (
					console.log({index}),
					console.log({product}),
					<OrderItem indexValue={index} key={index} productItem={product}/>
				
				))
				
				}
				
		
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<Link   href="/checkout">
					<button className={styles['primary-button']}>
					Checkout
					</button>
					
				</Link>
			</div>
		</aside>
	);
};

export default MyOrder;
