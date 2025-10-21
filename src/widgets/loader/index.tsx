import React, { FC } from 'react'
import cn from 'classnames'
import { LoaderProps } from '~widgets/loader/loader.type'
import { LoaderSVG } from '~widgets/loader/loader'

const Loader: FC<LoaderProps> = ({ isLoading, children, className }) => {
	return (
		<>
			<div
				className={cn(
					'absolute top-0 left-0 z-10000 w-full justify-center items-center h-full bg-gray-500 opacity-25',
					className,
					{
						hidden: !isLoading,
						flex: isLoading
					}
				)}
			>
				<LoaderSVG />
			</div>
			{!isLoading && <>{children}</>}
		</>
	)
}

export default Loader
