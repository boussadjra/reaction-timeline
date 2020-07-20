import React from 'react';
import './style.scss';

const ReactionTimeline = ({ items, renderContent, renderOpposite }) => {
	return (
		<div className="ve-tl__wrapper">
			{items.map((item, index) => {
				return (
					<div className="ve-tl__item" key={index}>
						<div className="ve-tl__item-content" style={item.styleConfig ? item.styleConfig : {}}>
							{renderContent ? (
								renderContent(item)
							) : (
								<>
									<h3 className="ve-tl__item-content_title">{item.title}</h3>
									<div className="ve-tl__item-content_body">{item.body}</div>
								</>
							)}
						</div>
						<div className="ve-tl__item_divider">
							<div
								className="ve-tl__item_divider_dot"
								style={{ background: item.styleConfig ? item.styleConfig.dotColor : 'white' }}
							/>
						</div>
						<div className="ve-tl__item_spacer">{renderOpposite(item)}</div>
					</div>
				);
			})}
		</div>
	);
};

export default ReactionTimeline;
