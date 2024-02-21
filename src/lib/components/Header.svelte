<script lang="ts">
	import { HeaderLink } from '../types/Header';

	const headerLinks: HeaderLink[] = [
		{
			label: 'Home',
			link: '/'
		},
		{
			label: 'About',
			link: '/about'
		},
		{
			label: 'Contact',
			link: '/contact'
		},
		{
			label: 'Shop',
			link: '/shop'
		}
	];
</script>

<header>
	<div class="padding-x py-6 border-b border-gray-300 flex items-center justify-between">
		<div>
			<img src="../icons/juan-logo.png'" alt="" srcset="" />
			Links here
		</div>
		<button>
			Cart <i class="fa-solid fa-cart-shopping"></i>
		</button>
	</div>
</header>
