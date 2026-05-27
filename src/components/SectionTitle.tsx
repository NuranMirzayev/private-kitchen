import { Box, Typography } from '@mui/material'

type Props = {
	subtitle?: string
	title: string
}

const SectionTitle = ({ title, subtitle }: Props) => {
	return (
		<Box
			sx={{
				marginBottom: '48px',
			}}
		>
			{subtitle && (
				<Typography
					sx={{
						color: '#d4a017',
						fontWeight: 700,
						marginBottom: '12px',
						letterSpacing: '2px',
					}}
				>
					{subtitle}
				</Typography>
			)}

			<Typography
				variant='h3'
				sx={{
					fontWeight: 900,
					fontSize: {
						xs: '40px',
						md: '56px',
					},
				}}
			>
				{title}
			</Typography>
		</Box>
	)
}

export default SectionTitle
