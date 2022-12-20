import React, { useContext } from 'react';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';
import AppContext from '@context/AppContext';
import addToCartimg from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext);
	const handClick = (item) =>{
		addToCart(item);
	};
	return (
		<div className={styles.ProductItem}>
			<Image src={product.images[0]} alt="" />
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<div role="button" tabindex={0} onClick={() => handClick(product)} onKeyDown={() => handClick(product)}>
					<Image src={addToCartimg} alt="" />
				</div>
				
			</div>
		</div>
	);
};

export default ProductItem;
