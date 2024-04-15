<script lang="ts">
    import 'styles/index.scss';
    
    import type { LayoutServerData } from './$types';

    import { Footer, Header } from 'components';

    export let data: LayoutServerData;
</script>


<Header user={data.user} />
<div class="container">
    <slot />
</div>
<Footer />