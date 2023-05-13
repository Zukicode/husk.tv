import { useEffect, useState } from 'react';

//Styles
import styles from './slider.module.scss';
import { SliderItem } from './SliderItem';

//Components
import { SliderButton } from 'components/Icons/SliderButton';

export const Slider = ({ sliderItems = [] }) => {
	const [activeSlider, setActiveSlider] = useState(0);

	//Change Slider Image
	useEffect(() => {
		const interval = setInterval(() => {
			if (activeSlider < sliderItems.length - 1) {
				setActiveSlider(activeSlider + 1);
			} else {
				setActiveSlider(0);
			}
		}, 3000);
		return () => clearInterval(interval);
	}, [activeSlider, sliderItems.length]);

	const nextImage = () => {
		if (activeSlider < sliderItems.length - 1) {
			setActiveSlider(activeSlider + 1);
		} else {
			setActiveSlider(0);
		}
	};

	const previousImage = () => {
		if (activeSlider > 0) {
			setActiveSlider(activeSlider - 1);
		} else {
			setActiveSlider(sliderItems.length - 1);
		}
	};

	return (
		<div className={styles.slider}>
			<div className={styles.sliderImage}>
				{sliderItems.map((image, index) => (
					<SliderItem
						key={index}
						activeSlider={activeSlider}
						id={image.id}
						keyId={index}
						photoURL={image.primaryImage.url}
					/>
				))}
			</div>
			<button onClick={previousImage} className={styles.left}>
				<SliderButton />
			</button>
			<button onClick={nextImage} className={styles.right}>
				<SliderButton />
			</button>
			<div className={styles.countImage}>
				{sliderItems.map((dot, index) => (
					<div
						onClick={() => setActiveSlider(index)}
						key={index}
						className={
							index === activeSlider
								? `${styles.dot} ${styles.active}`
								: styles.dot
						}
					></div>
				))}
			</div>
		</div>
	);
};
