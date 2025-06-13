const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="bg-[#122251] px-5 ">
        <div data-aos="fade-up"
            class="flex md:items-center items-start max-w-7xl w-full mx-auto md:pt-32 pt-20 pb-10 border-b border-zinc-400 justify-start md:justify-between gap-5 md:flex-row flex-col">
            <img src="/docs/assets/images/white-logo.svg" class="h-5 invert " alt="">
            <div class="flex md:items-center md:justify-center mt-5 md:mt-0 md:gap-16 gap-5 md:flex-row flex-col">
                <div class="">
                    <h2 class="text-white uppercase font-medium text-xl">Contact</h2>
                    <a href="mailto:info@dgrgroup.net"
                        class="hover:underline text-zinc-200 mt-1 block text-lg">info@dgrgroup.net</a>
                </div>
                <div class="">
                    <h2 class="text-white uppercase font-medium text-xl">Press & Public Relations</h2>
                    <a href="mailto:info@dgrgroup.net.net"
                        class="hover:underline text-zinc-200 mt-1 block text-lg">info@dgrgroup.net.net</a>
                </div>
            </div>
        </div>
        <div class="flex items-center max-w-7xl w-full mx-auto py-8 justify-between gap-5 md:flex-row flex-col">
            <p class="text-zinc-200">Copyright © <span id="copyright"></span> DGR Consult Invest GmbH All rights reserved</p>
            <div class="flex items-center gap-5">
                <a href="/privacy-policy.html" class="hover:underline text-zinc-200 block ">Privacy Policy</a>
                <a href="/imprint.html" class="hover:underline text-zinc-200 block ">Imprint</a>
                <a href="/careers.html" class="hover:underline text-zinc-200 block ">Careers</a>
            </div>
        </div>
    </footer>
`

const year = new Date().getFullYear()
const copyright = document.getElementById('copyright').innerHTML = year