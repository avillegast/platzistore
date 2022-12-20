import React, {useContext} from 'react';
import Image from 'next/image';
import styles from '@styles/OrderItem.module.scss';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';

const OrderItem = (props) => {

	const { productItem, indexValue} = props;
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (index) => {
		removeFromCart(index);
	};
	return (
		<div className={styles.OrderItem}>

			<figure>
				<Image src={productItem?.images[0]} alt={productItem?.title} />
			</figure>
			<p>{productItem?.title}</p>
			<p>${productItem?.price}</p>
			<Image src={close} alt="close" onClick={() => handleRemove(indexValue)}/>
		</div>
	);
};

export default OrderItem;
