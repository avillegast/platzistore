import React from 'react';
import ProductInfo from '@components/ProductInfo';
import '@styles/ProductDetail.scss';
import Image from 'next/image';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<Image src="./icons/icon_close.png" alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
};

export default ProductDetail;
