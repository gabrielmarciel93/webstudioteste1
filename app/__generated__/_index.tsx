/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, Link as Link, RichTextLink as RichTextLink } from "@webstudio-is/sdk-components-react-router";
import { Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Box as Box, Image as Image, Slot as Slot, Button as Button, Heading as Heading, Paragraph as Paragraph, Text as Text, Bold as Bold } from "@webstudio-is/sdk-components-react";
import { NavigationMenu as NavigationMenu, NavigationMenuList as NavigationMenuList, NavigationMenuItem as NavigationMenuItem, NavigationMenuLink as NavigationMenuLink, Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose, NavigationMenuViewport as NavigationMenuViewport, Tabs as Tabs, TabsList as TabsList, TabsContent as TabsContent, TabsTrigger as TabsTrigger } from "@webstudio-is/sdk-components-react-radix";


      export const projectId = "e96e52b0-21fb-40f7-a703-f0edb2134a6d";

      export const lastPublished = "2025-07-08T21:03:48.170Z";

      export const siteName = "Flowint Template";

      export const breakpoints = [{"id":"GnR6bZEQ8xCJiW_mNTXz5"},{"id":"M32CLl6eYAt7bcRGiSFOM","maxWidth":991},{"id":"qA-Uh4vpO2wXD6IQQQE3C","maxWidth":767},{"id":"wJ-9_hdCEcgdyCz-jqDWB","maxWidth":479}];

      export const favIconAsset: string | undefined =
        "favicon_zCM2jGLz5cOsjBl8o7GzT.png";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["HankenGrotesk-VariableFont_wght_Vxgv4kVYO9GL0SCUNOfaI.ttf"]

      export const pageBackgroundImageAssets: string[] =
        []

      
            

            export const CustomCode = () => {
              return (<></>);
            }
          

      const Page = (_props: { system: any; }) => {
return <Body
className={`w-body`}>
<Box
className={`w-box`}>
<Slot>
<Fragment_1>
<Box
tag={"nav"}
className={`w-box c1fmx8ab cuyjlrf c175oqs7 c1u51o1f c1wre12j c3uwkx5 croij3h cdb61rp c53o0ip c9rrarx c1q7npga c1q2h8tl c1dveily c1oejzxd cjea5ps cd6a8sw c14780xw c1qbg5xm cv5w85u`}>
<Link
href={"/"}
className={`w-link`}>
<Image
loading={"eager"}
src={"/assets/logo-flowint_4SnNAkr3bOy66L3zCFRv7.svg"}
width={95}
height={15}
className={`w-image c1h745vm`} />
</Link>
<NavigationMenu
className={`w-navigation-menu c168a0c2 c1wre12j c2fr2xh ctfr1b7 c1nhqm0b`}>
<NavigationMenuList
className={`w-menu-list c1wre12j c1hduoj5 c3uwkx5 c18ww0nc c8ty0l2 cxs21eh c1xmt165 c17y9upl`}>
<NavigationMenuItem
data-ws-index="0"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
className={`w-link c9ylq2r cj5sz98 c3uwkx5 c18ww0nc c19dw0wo c1acabzx c1yrsh9m c18ge2lk cxqoek0 c1bg2aid c1ewm8gh c1j3s0o9 ci8jmy8 c1rou384 c1ca2moy cqxsnw5 c1vdrrw8 c1d3c60v cur7sbk cinzisj c6jo3vh cdksuzy cwop0oi c1bo2lvc`}>
{"Product"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="1"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
className={`w-link c9ylq2r cj5sz98 c3uwkx5 c18ww0nc c19dw0wo c1acabzx c1yrsh9m c18ge2lk cxqoek0 c1bg2aid c1ewm8gh c1j3s0o9 ci8jmy8 c1rou384 c1ca2moy cqxsnw5 c1vdrrw8 c1d3c60v cur7sbk cinzisj c6jo3vh cdksuzy cwop0oi c1bo2lvc`}>
{"Use cases"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="2"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
className={`w-link c9ylq2r cj5sz98 c3uwkx5 c18ww0nc c19dw0wo c1acabzx c1yrsh9m c18ge2lk cxqoek0 c1bg2aid c1ewm8gh c1j3s0o9 ci8jmy8 c1rou384 c1ca2moy cqxsnw5 c1vdrrw8 c1d3c60v cur7sbk cinzisj c6jo3vh cdksuzy cwop0oi c1bo2lvc`}>
{"Enterprise"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="3"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
className={`w-link c9ylq2r cj5sz98 c3uwkx5 c18ww0nc c19dw0wo c1acabzx c1yrsh9m c18ge2lk cxqoek0 c1bg2aid c1ewm8gh c1j3s0o9 ci8jmy8 c1rou384 c1ca2moy cqxsnw5 c1vdrrw8 c1d3c60v cur7sbk cinzisj c6jo3vh cdksuzy cwop0oi c1bo2lvc`}>
{"Pricing"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
</NavigationMenuList>
<NavigationMenuList
className={`w-menu-list c1wre12j c1hduoj5 c3uwkx5 c18ww0nc c53o0ip cdb61rp c1xmt165 c17y9upl`}>
<NavigationMenuItem
data-ws-index="4"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
className={`w-link c9ylq2r cj5sz98 c3uwkx5 c18ww0nc c19dw0wo c1acabzx c1yrsh9m c18ge2lk cxqoek0 c1bg2aid c1ewm8gh c1j3s0o9 ci8jmy8 c1rou384 c1ca2moy cqxsnw5 c1vdrrw8 c1d3c60v cur7sbk cinzisj c6jo3vh cdksuzy cwop0oi c1bo2lvc`}>
{"Talk to sales"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
<Box
className={`w-box c1wre12j c3uwkx5 croij3h c16almvz c15vk9n c1jxwkzq`}>
<Button
type={"button"}
className={`w-button c1bhksu9 c9ylq2r cq4mukj c6iiy3n cnd39nk cpb2v0v c3a826z c1wp1mp9 c1boufi4 cyjel2r cqxsnw5 c1sxv1yc c12kd1bb cu4zxnc c1c1f9dt c1mp6d9l cv7u2xn cbn1j8k ctsm033 c10fig1y c1mwlu3r c8zx3th c1vl04mr cxmc7as c1gk3qsy c1ldlu7o`}>
{"Login"}
</Button>
<Button
type={"button"}
className={`w-button c12h1spu c4ctj73 cq4mukj c6iiy3n cnd39nk cpb2v0v c3a826z c1wp1mp9 c1boufi4 cyjel2r cqxsnw5 c1sxv1yc c12kd1bb cu4zxnc c1c1f9dt c1mp6d9l cv7u2xn cbn1j8k ctsm033 c10fig1y c1mwlu3r c8zx3th c1vl04mr cxmc7as c1gk3qsy c1ldlu7o`}>
{"Get started"}
</Button>
</Box>
</NavigationMenuList>
</NavigationMenu>
<Dialog>
<DialogTrigger>
<Button
type={"button"}
className={`w-button c9ylq2r cgv3d8u c3uwkx5 c18ww0nc c19dw0wo c1acabzx c1yrsh9m c18ge2lk cxqoek0 c1bg2aid c1ewm8gh c1j3s0o9 ci8jmy8 ccsap2c c1e2piri c1boeci8 cx07snm c148kiev c1vdrrw8 c1d3c60v cur7sbk cinzisj c6jo3vh cdksuzy cwop0oi c1bo2lvc c1muqqk5`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.667 8h10.666M2.667 4h10.666M2.667 12h10.666\"/></svg>"}
className={`w-html-embed`} />
</Button>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay c1k21cms cshmfxu c8o9qah c1oejzxd c1b7enq7 c5zixnu c1al5flm c1q732lf c1wre12j c7svi18 cwm5l33 czxxy58`}>
<DialogContent
className={`w-dialog-content c2fr2xh c5zixnu c1wre12j c7svi18 crf62vl c1ofyugc c1al5flm clo1jk c168a0c2 c1ol7wjx c19rvgi0 c118ji7k c1q0iprw c1agx0h4 c1mrw3n7 c189t3ys c1vp66c6 c1ygkxna`}>
<Box
tag={"nav"}
role={"navigation"}
className={`w-box`}>
<NavigationMenu
className={`w-navigation-menu c168a0c2 c1wre12j c2fr2xh ctfr1b7 chwj9lu`}>
<NavigationMenuList
className={`w-menu-list c1wre12j c1hduoj5 c3uwkx5 c18ww0nc c8ty0l2 cxs21eh c1xmt165 c17y9upl chwj9lu chlc5ko cq9jx0c`}>
<NavigationMenuItem
data-ws-index="0"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
className={`w-link c9ylq2r cj5sz98 c3uwkx5 c18ww0nc c19dw0wo c1acabzx c1yrsh9m c18ge2lk cxqoek0 c1bg2aid c1ewm8gh c1j3s0o9 ci8jmy8 c1rou384 c1ca2moy cqxsnw5 c1vdrrw8 c1d3c60v cur7sbk cinzisj c6jo3vh cdksuzy cwop0oi c1bo2lvc`}>
{"Product"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="1"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
className={`w-link c9ylq2r cj5sz98 c3uwkx5 c18ww0nc c19dw0wo c1acabzx c1yrsh9m c18ge2lk cxqoek0 c1bg2aid c1ewm8gh c1j3s0o9 ci8jmy8 c1rou384 c1ca2moy cqxsnw5 c1vdrrw8 c1d3c60v cur7sbk cinzisj c6jo3vh cdksuzy cwop0oi c1bo2lvc`}>
{"Use cases"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="2"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
className={`w-link c9ylq2r cj5sz98 c3uwkx5 c18ww0nc c19dw0wo c1acabzx c1yrsh9m c18ge2lk cxqoek0 c1bg2aid c1ewm8gh c1j3s0o9 ci8jmy8 c1rou384 c1ca2moy cqxsnw5 c1vdrrw8 c1d3c60v cur7sbk cinzisj c6jo3vh cdksuzy cwop0oi c1bo2lvc`}>
{"Enterprise"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="3"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
className={`w-link c9ylq2r cj5sz98 c3uwkx5 c18ww0nc c19dw0wo c1acabzx c1yrsh9m c18ge2lk cxqoek0 c1bg2aid c1ewm8gh c1j3s0o9 ci8jmy8 c1rou384 c1ca2moy cqxsnw5 c1vdrrw8 c1d3c60v cur7sbk cinzisj c6jo3vh cdksuzy cwop0oi c1bo2lvc`}>
{"Pricing"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
</NavigationMenuList>
<NavigationMenuList
className={`w-menu-list c1wre12j c1hduoj5 c3uwkx5 c18ww0nc c53o0ip cdb61rp c1xmt165 c17y9upl chwj9lu chlc5ko cq9jx0c cxtfumf c1g7df6h cog6akp`}>
<NavigationMenuItem
data-ws-index="4"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
className={`w-link c9ylq2r cj5sz98 c3uwkx5 c18ww0nc c19dw0wo c1acabzx c1yrsh9m c18ge2lk cxqoek0 c1bg2aid c1ewm8gh c1j3s0o9 ci8jmy8 c1rou384 c1ca2moy cqxsnw5 c1vdrrw8 c1d3c60v cur7sbk cinzisj c6jo3vh cdksuzy cwop0oi c1bo2lvc`}>
{"Talk to sales"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
<Box
className={`w-box c1wre12j c3uwkx5 croij3h c16almvz c15vk9n c1jxwkzq`}>
<Button
className={`w-button c1bhksu9 c9ylq2r cq4mukj c6iiy3n cnd39nk cpb2v0v c3a826z c1wp1mp9 c1boufi4 cyjel2r cqxsnw5 c1sxv1yc c12kd1bb cu4zxnc c1c1f9dt c1mp6d9l cv7u2xn cbn1j8k ctsm033 c10fig1y c1mwlu3r c8zx3th c1vl04mr cxmc7as c1gk3qsy c1ldlu7o`}>
{"Login"}
</Button>
<Button
className={`w-button c12h1spu c4ctj73 cq4mukj c6iiy3n cnd39nk cpb2v0v c3a826z c1wp1mp9 c1boufi4 cyjel2r cqxsnw5 c1sxv1yc c12kd1bb cu4zxnc c1c1f9dt c1mp6d9l cv7u2xn cbn1j8k ctsm033 c10fig1y c1mwlu3r c8zx3th c1vl04mr cxmc7as c1gk3qsy c1ldlu7o`}>
{"Get started"}
</Button>
</Box>
</NavigationMenuList>
<Box
className={`w-box cwdlaet cshmfxu cfwaltj c1wre12j c18ww0nc c16r5ap1`}>
<NavigationMenuViewport
className={`w-menu-viewport c168a0c2 c3sces c19cbxyg c4e00g1 c19dw0wo c1acabzx c1yrsh9m c18ge2lk cl22mbo ctqz7ba clo1jk c1rdhjlk c17uyd3j c1q0iprw`} />
</Box>
</NavigationMenu>
</Box>
<DialogClose
className={`w-close-button cwdlaet cdggrpr c5claqq c1l5fkp c1l7pkpy c1wcpy9q cj3ezif ci9022s c1wre12j c3uwkx5 c18ww0nc ckqiyv6 c1jxt60r c9ylq2r c1gjd8v3 c97laj7 c1vdrrw8 ckxwl2d cnyh364 c11inv99 c1sh5dnm codq9wi c1idn9jj`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 3 3 12.5M3 3l9.5 9.5\"/></svg>"}
className={`w-html-embed c12rvo2b`} />
</DialogClose>
</DialogContent>
</DialogOverlay>
</Dialog>
</Box>
</Fragment_1>
</Slot>
<Box
tag={"main"}
className={`w-box`}>
<Box
tag={"section"}
className={`w-box c1n6yfnd c123cnm2 c168a0c2 c19cbxyg c4e00g1`}>
<Box
className={`w-box c1ol7wjx c177vjgx cs1bscr c165pql3 c2fr2xh c1pynuco`}>
<Box
className={`w-box c1wre12j c7svi18 c1hk3yww c1g8paam c3uwkx5 croij3h`}>
<Box
className={`w-box c1wre12j c3uwkx5 croij3h c7svi18 c2vzfzw c7f6sxb c83drt3 c8nlssj chxor3k c1popjx1 c1k3d8rb`}>
<Heading
className={`w-heading cxw7fgj c105ypcg cliz9hs c1on9fzj cxzg5y8 c1qcqmty c1p8keq5 cejwv8 ccyn7r9`}>
{"Effortless, Secure, and Scalable Workflows"}
</Heading>
<Paragraph
className={`w-paragraph c1p8keq5 c11qqwmb c1m1up48 cm6ocin ctns64h`}>
{"Empower your team to focus on what matters most. Seamlessly integrate with the tools you already use and unlock unparalleled productivity."}
</Paragraph>
<Box
className={`w-box c1wre12j c7svi18 c3uwkx5 croij3h c4bofso c1v502xr c1srpweh`}>
<Button
type={"button"}
className={`w-button c12h1spu c4ctj73 cq4mukj c6iiy3n cnd39nk cpb2v0v c3a826z c1wp1mp9 c1boufi4 cyjel2r cqxsnw5 c1sxv1yc c12kd1bb cu4zxnc c1c1f9dt c1mp6d9l cv7u2xn cbn1j8k ctsm033 c10fig1y c1mwlu3r c8zx3th c1vl04mr cxmc7as c1gk3qsy c1ldlu7o`}>
{"Get started for free"}
</Button>
<Text
tag={"span"}
className={`w-text cbmvciw`}>
{"No credit card required"}
</Text>
<Text
tag={"span"}
className={`w-text cbmvciw`}>
{"Realizando um teste de atualização! 😉"}
</Text>
</Box>
</Box>
<Box
className={`w-box c1pruj1h c192nzbd c1asypxa c1lb4xd3 cugz8nj crk9jw4 c1f5wv5 c1q7npga c1j0y42x cxkd7w7 c45k2m3 c173hpie c1wre12j c1j2ctuz c1c7caon c3uwkx5 croij3h c1spkpp3 c1xt0f2j c1yacw5f cdy3onf cv6qh2b cy5mabc chzmqf4 cq52kx1 cd6e13v`}>
<Box
className={`w-box c1wre12j`}>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 clfhgd7 cb9piqw`}>
<Image
src={"/assets/avatar-1_fiuZgx7qcKEP7Yz0WL4aH.png"}
width={60}
height={60}
className={`w-image`} />
</Box>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 clfhgd7 cb9piqw`}>
<Image
src={"/assets/avatar-2_wlMiwY8yKhL4RavLFxKDj.png"}
width={60}
height={60}
className={`w-image`} />
</Box>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 clfhgd7 cb9piqw`}>
<Image
src={"/assets/avatar-3_48E3SzRpro_xJkbOsqD7H.png"}
width={60}
height={60}
className={`w-image`} />
</Box>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 clfhgd7 cb9piqw`}>
<Image
src={"/assets/avatar-4_w0IowgVbu0dxTzEktnoSc.png"}
width={60}
height={60}
className={`w-image`} />
</Box>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 clfhgd7 cb9piqw`}>
<Image
src={"/assets/avatar-5_L5VUgC7M6-0H1sI24Fyi7.png"}
width={60}
height={60}
className={`w-image`} />
</Box>
</Box>
<Box
className={`w-box cg2nswf c15upkr7 c170gx0v cxgpju8`} />
<Box
className={`w-box c118ji7k c11ntkaz`}>
<Box
className={`w-box c1wre12j c3uwkx5 croij3h cjolq4x c2qr3nt`}>
<Text
className={`w-text ccxxvwd c105ypcg cxzg5y8 c16k72ac`}>
{"4.8"}
</Text>
<HtmlEmbed
code={"<!--?xml version=\"1.0\" encoding=\"UTF-8\"?--><svg width=\"20\" height=\"20\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.8712 33.0437L15.9976 44.7037C15.9362 45.5231 16.6646 46.0874 17.3161 45.7222C21.9289 43.1384 36.3783 33.6481 43.7017 12.7901C44.0376 11.8333 43.1352 10.9699 42.3646 11.5096C38.0387 14.5391 28.5846 20.8008 22.7421 21.9935C22.7421 21.9935 26.4836 19.3948 28.7231 15.4055C28.9426 15.0144 28.9244 14.5138 28.6796 14.1608L20.5127 2.38942C20.0287 1.69163 19.0354 1.98074 18.8606 2.87019L16.3181 15.8074L4.38437 26.2228C3.78602 26.7448 3.90808 27.7998 4.5989 28.0792L16.8712 33.0437Z\" fill=\"#e3ad0b\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M37.9745 28.4481C37.2188 29.5026 35.5908 31.6718 34.0876 32.9975C33.7871 33.2625 33.8276 33.707 34.1724 33.9235L42.1145 38.9092C42.5926 39.2092 43.2384 38.853 43.1576 38.3325C42.7882 35.9498 41.7237 30.982 39.0328 28.3743C38.7322 28.0832 38.2142 28.1138 37.9745 28.4481Z\" fill=\"#e3ad0b\"></path></svg>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<!--?xml version=\"1.0\" encoding=\"UTF-8\"?--><svg width=\"20\" height=\"20\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.8712 33.0437L15.9976 44.7037C15.9362 45.5231 16.6646 46.0874 17.3161 45.7222C21.9289 43.1384 36.3783 33.6481 43.7017 12.7901C44.0376 11.8333 43.1352 10.9699 42.3646 11.5096C38.0387 14.5391 28.5846 20.8008 22.7421 21.9935C22.7421 21.9935 26.4836 19.3948 28.7231 15.4055C28.9426 15.0144 28.9244 14.5138 28.6796 14.1608L20.5127 2.38942C20.0287 1.69163 19.0354 1.98074 18.8606 2.87019L16.3181 15.8074L4.38437 26.2228C3.78602 26.7448 3.90808 27.7998 4.5989 28.0792L16.8712 33.0437Z\" fill=\"#e3ad0b\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M37.9745 28.4481C37.2188 29.5026 35.5908 31.6718 34.0876 32.9975C33.7871 33.2625 33.8276 33.707 34.1724 33.9235L42.1145 38.9092C42.5926 39.2092 43.2384 38.853 43.1576 38.3325C42.7882 35.9498 41.7237 30.982 39.0328 28.3743C38.7322 28.0832 38.2142 28.1138 37.9745 28.4481Z\" fill=\"#e3ad0b\"></path></svg>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<!--?xml version=\"1.0\" encoding=\"UTF-8\"?--><svg width=\"20\" height=\"20\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.8712 33.0437L15.9976 44.7037C15.9362 45.5231 16.6646 46.0874 17.3161 45.7222C21.9289 43.1384 36.3783 33.6481 43.7017 12.7901C44.0376 11.8333 43.1352 10.9699 42.3646 11.5096C38.0387 14.5391 28.5846 20.8008 22.7421 21.9935C22.7421 21.9935 26.4836 19.3948 28.7231 15.4055C28.9426 15.0144 28.9244 14.5138 28.6796 14.1608L20.5127 2.38942C20.0287 1.69163 19.0354 1.98074 18.8606 2.87019L16.3181 15.8074L4.38437 26.2228C3.78602 26.7448 3.90808 27.7998 4.5989 28.0792L16.8712 33.0437Z\" fill=\"#e3ad0b\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M37.9745 28.4481C37.2188 29.5026 35.5908 31.6718 34.0876 32.9975C33.7871 33.2625 33.8276 33.707 34.1724 33.9235L42.1145 38.9092C42.5926 39.2092 43.2384 38.853 43.1576 38.3325C42.7882 35.9498 41.7237 30.982 39.0328 28.3743C38.7322 28.0832 38.2142 28.1138 37.9745 28.4481Z\" fill=\"#e3ad0b\"></path></svg>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<!--?xml version=\"1.0\" encoding=\"UTF-8\"?--><svg width=\"20\" height=\"20\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.8712 33.0437L15.9976 44.7037C15.9362 45.5231 16.6646 46.0874 17.3161 45.7222C21.9289 43.1384 36.3783 33.6481 43.7017 12.7901C44.0376 11.8333 43.1352 10.9699 42.3646 11.5096C38.0387 14.5391 28.5846 20.8008 22.7421 21.9935C22.7421 21.9935 26.4836 19.3948 28.7231 15.4055C28.9426 15.0144 28.9244 14.5138 28.6796 14.1608L20.5127 2.38942C20.0287 1.69163 19.0354 1.98074 18.8606 2.87019L16.3181 15.8074L4.38437 26.2228C3.78602 26.7448 3.90808 27.7998 4.5989 28.0792L16.8712 33.0437Z\" fill=\"#e3ad0b\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M37.9745 28.4481C37.2188 29.5026 35.5908 31.6718 34.0876 32.9975C33.7871 33.2625 33.8276 33.707 34.1724 33.9235L42.1145 38.9092C42.5926 39.2092 43.2384 38.853 43.1576 38.3325C42.7882 35.9498 41.7237 30.982 39.0328 28.3743C38.7322 28.0832 38.2142 28.1138 37.9745 28.4481Z\" fill=\"#e3ad0b\"></path></svg>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<!--?xml version=\"1.0\" encoding=\"UTF-8\"?--><svg width=\"20\" height=\"20\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.8712 33.0437L15.9976 44.7037C15.9362 45.5231 16.6646 46.0874 17.3161 45.7222C21.9289 43.1384 36.3783 33.6481 43.7017 12.7901C44.0376 11.8333 43.1352 10.9699 42.3646 11.5096C38.0387 14.5391 28.5846 20.8008 22.7421 21.9935C22.7421 21.9935 26.4836 19.3948 28.7231 15.4055C28.9426 15.0144 28.9244 14.5138 28.6796 14.1608L20.5127 2.38942C20.0287 1.69163 19.0354 1.98074 18.8606 2.87019L16.3181 15.8074L4.38437 26.2228C3.78602 26.7448 3.90808 27.7998 4.5989 28.0792L16.8712 33.0437Z\" fill=\"#e3ad0b\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M37.9745 28.4481C37.2188 29.5026 35.5908 31.6718 34.0876 32.9975C33.7871 33.2625 33.8276 33.707 34.1724 33.9235L42.1145 38.9092C42.5926 39.2092 43.2384 38.853 43.1576 38.3325C42.7882 35.9498 41.7237 30.982 39.0328 28.3743C38.7322 28.0832 38.2142 28.1138 37.9745 28.4481Z\" fill=\"#e3ad0b\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box`}>
<Text
tag={"span"}
className={`w-text`}>
{"Overall rating from our users"}
</Text>
</Box>
</Box>
</Box>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c19cbxyg c4e00g1 cjq0sq6 c1ptf2i1`}>
<Image
src={"/assets/flowint-template-dashboard_pxdjFxg-3Z2yS6GdsH9rQ.webp"}
width={2880}
height={1620}
alt={"Image of the product dashboard"}
className={`w-image crd04pn`} />
</Box>
</Box>
</Box>
<Image
src={"/assets/points-bg-hero_rXK6EuHpqZjhpM-d3z3JM.webp"}
width={1884}
height={1059}
className={`w-image cwdlaet c12t27vb cxodmln c1r36zlc c150wwu clza6ru`} />
</Box>
<Box
tag={"section"}
className={`w-box`}>
<Box
className={`w-box c1ol7wjx c177vjgx cs1bscr c165pql3 c2fr2xh c1pynuco`}>
<Heading
tag={"h2"}
className={`w-heading ceedd2 c105ypcg c1ug6hox c1kgwakr cxzg5y8 c1p8keq5 c32c1ro`}>
{"Trusted by industry leaders like"}
</Heading>
<Box
className={`w-box c1wre12j c19cbxyg c4e00g1 c1m5776v cfv923v c168a0c2 c2fr2xh ca43yih cgu2mxi c1nhqm0b ${""}`}>
<HtmlEmbed
code={"<style>\n  \n@keyframes scroll {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(calc(-100% - 10rem));\n  }\n}\n\n.scroll {\n  animation: scroll 20s linear infinite;\n}\n</style>"}
executeScriptOnCanvas={false}
className={`w-html-embed`} />
<Box
className={`w-box c1wre12j c1m5776v cfv923v crfnq4z c11ntkaz ${"scroll"}`}>
<Image
src={"/assets/svg-4_TYZG1tRzEh150ztRmyyLW.svg"}
width={205}
height={39}
alt={"brand image "}
className={`w-image cddw0fw c2fr2xh c1pw1vcz cddn2c c1hei7oo`} />
<Image
src={"/assets/svg-2_j4VDsemHmz0oKbj7lFFTc.svg"}
width={78}
height={30}
alt={"brand image "}
className={`w-image cddw0fw c2fr2xh c1pw1vcz cddn2c c1hei7oo`} />
<Image
src={"/assets/svg-5_7c6XCK3MRVgnbfaGFR0RA.svg"}
width={46}
height={46}
alt={"brand image "}
className={`w-image cddw0fw c2fr2xh c1pw1vcz cddn2c c1hei7oo`} />
<Image
src={"/assets/svg-3_eLzmCMQe2ki3ejoBArnFM.svg"}
width={160}
height={30}
alt={"brand image "}
className={`w-image cddw0fw c2fr2xh c1pw1vcz cddn2c c1hei7oo`} />
</Box>
<Box
className={`w-box c1wre12j c1m5776v cfv923v crfnq4z c11ntkaz ${"scroll"}`}>
<Image
src={"/assets/svg-4_TYZG1tRzEh150ztRmyyLW.svg"}
width={205}
height={39}
alt={"brand image "}
className={`w-image cddw0fw c2fr2xh c1pw1vcz cddn2c c1hei7oo`} />
<Image
src={"/assets/svg-2_j4VDsemHmz0oKbj7lFFTc.svg"}
width={78}
height={30}
alt={"brand image "}
className={`w-image cddw0fw c2fr2xh c1pw1vcz cddn2c c1hei7oo`} />
<Image
src={"/assets/svg-5_7c6XCK3MRVgnbfaGFR0RA.svg"}
width={46}
height={46}
alt={"brand image "}
className={`w-image cddw0fw c2fr2xh c1pw1vcz cddn2c c1hei7oo`} />
<Image
src={"/assets/svg-3_eLzmCMQe2ki3ejoBArnFM.svg"}
width={160}
height={30}
alt={"brand image "}
className={`w-image cddw0fw c2fr2xh c1pw1vcz cddn2c c1hei7oo`} />
</Box>
<Box
className={`w-box cwdlaet c1oejzxd c1b7enq7 c1hi0zk4 c1gzcmaj c7f6sxb c83drt3 c8nlssj chxor3k c1popjx1 c1k3d8rb`} />
<Box
className={`w-box cwdlaet c1oejzxd c1b7enq7 c1hi0zk4 c2vi5pt c7f6sxb c83drt3 c8nlssj chxor3k c1popjx1 c8o9qah c1k3d8rb`} />
</Box>
<Box
className={`w-box cgv3d8u c19cbxyg c4e00g1 c1hk3yww c1g8paam c168a0c2 c2fr2xh ca43yih cgu2mxi c7svi18 c10al51t c1jv1rf1 cmq8ibl ccyn7r9 ${""}`}>
<Box
className={`w-box c1wre12j c1m5776v cfv923v c1tab0gb cfeempu cv5w85u c3511h9 c1xtowow c1an5f22 chqjjxd ${""}`}>
<Image
src={"/assets/svg-4_TYZG1tRzEh150ztRmyyLW.svg"}
width={205}
height={39}
className={`w-image cddw0fw c2fr2xh c1pw1vcz cddn2c c1hei7oo`} />
<Image
src={"/assets/svg-2_j4VDsemHmz0oKbj7lFFTc.svg"}
width={78}
height={30}
className={`w-image cddw0fw c2fr2xh c1pw1vcz cddn2c c1hei7oo`} />
<Image
src={"/assets/svg-5_7c6XCK3MRVgnbfaGFR0RA.svg"}
width={46}
height={46}
className={`w-image cddw0fw c2fr2xh c1pw1vcz cddn2c c1hei7oo`} />
<Image
src={"/assets/svg-3_eLzmCMQe2ki3ejoBArnFM.svg"}
width={160}
height={30}
className={`w-image cddw0fw c2fr2xh c1pw1vcz cddn2c c1hei7oo`} />
</Box>
<Box
className={`w-box c1wre12j c1m5776v cfv923v c1tab0gb cfeempu cv5w85u c3511h9 c1xtowow c1an5f22 chqjjxd ${""}`}>
<Image
src={"/assets/svg-4_TYZG1tRzEh150ztRmyyLW.svg"}
width={205}
height={39}
className={`w-image cddw0fw c2fr2xh c1pw1vcz cddn2c c1hei7oo`} />
<Image
src={"/assets/svg-2_j4VDsemHmz0oKbj7lFFTc.svg"}
width={78}
height={30}
className={`w-image cddw0fw c2fr2xh c1pw1vcz cddn2c c1hei7oo`} />
<Image
src={"/assets/svg-5_7c6XCK3MRVgnbfaGFR0RA.svg"}
width={46}
height={46}
className={`w-image cddw0fw c2fr2xh c1pw1vcz cddn2c c1hei7oo`} />
<Image
src={"/assets/svg-3_eLzmCMQe2ki3ejoBArnFM.svg"}
width={160}
height={30}
className={`w-image cddw0fw c2fr2xh c1pw1vcz cddn2c c1hei7oo`} />
</Box>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box c1n6yfnd c123cnm2`}>
<Box
className={`w-box c1ol7wjx c177vjgx cs1bscr c165pql3 c2fr2xh c1pynuco`}>
<Tabs
defaultValue={"0"}
className={`w-tabs c1wre12j ctfr1b7 c3uwkx5 c1ik89ha chwj9lu cq4kpku c14uo6f0`}>
<TabsList
className={`w-tabs-list c2sid0c c1wre12j c7svi18 crfnq4z c11ntkaz c1lkrluu c1jnislo cfshnvc c1gtze0x c1wos6fr c2w4g4u cp8l9nt c1184k38 c1hei7oo c1an5f22 c1xtowow c1yacw5f c1hf1fl2 c4wrv7c cm4r822 c1p8lhhs cqqlnag`}>
<TabsTrigger
data-ws-index="0"
className={`w-tab-trigger c1wre12j c7svi18 c19qdlvg c18ww0nc cjwwci6 c1i42oys c6sdjct chxqlgk c1ic2y2s cr4w10t c15mksln cnd39nk c1ok4bu5 cjv2563 c19he33y c1tzka7y c1fw1o1g c3qpdmb cg3ed2r cqq48kh c1sxv1yc c19g8bdq c1uxrb91 c5xux6h cyxijnb c9hsh8s caiwi1d cd13apy cwsnnse c1v8h2xf cc26d5s c1x9n9r3 c1re91zw ctns64h c1qtkadx cducuv6 c1umuk3b ci31kyj ck859ur`}>
<Heading
tag={"h2"}
className={`w-heading cuhj26k c105ypcg c1ug6hox c1kgwakr cxzg5y8 c1g4ldx4`}>
{"AI-Driven Efficiency"}
</Heading>
<Paragraph
className={`w-paragraph c1fhajh8 c1ukewas`}>
{"Leverage cutting-edge AI to automate repetitive tasks and optimize your operations."}
</Paragraph>
</TabsTrigger>
<TabsTrigger
data-ws-index="1"
className={`w-tab-trigger c1wre12j c7svi18 c19qdlvg c18ww0nc cjwwci6 c1i42oys c6sdjct chxqlgk c1ic2y2s cr4w10t c15mksln cnd39nk c1ok4bu5 cjv2563 c19he33y c1tzka7y c1fw1o1g c3qpdmb cg3ed2r cqq48kh c1sxv1yc c19g8bdq c1uxrb91 c5xux6h cyxijnb c9hsh8s caiwi1d cd13apy cwsnnse c1v8h2xf cc26d5s c1x9n9r3 c1re91zw ctns64h c1qtkadx cducuv6 c1umuk3b ci31kyj ck859ur c1bpanzj`}>
<Heading
tag={"h2"}
className={`w-heading cuhj26k c105ypcg c1ug6hox c1kgwakr cxzg5y8 c1g4ldx4`}>
{"Flexible Integrations"}
</Heading>
<Paragraph
className={`w-paragraph c1fhajh8 c1ukewas`}>
{"Connect with 200+ tools, including Slack, Google Workspace, and Salesforce."}
</Paragraph>
</TabsTrigger>
<TabsTrigger
data-ws-index="2"
className={`w-tab-trigger c1wre12j c7svi18 c19qdlvg c18ww0nc cjwwci6 c1i42oys c6sdjct chxqlgk c1ic2y2s cr4w10t c15mksln cnd39nk c1ok4bu5 cjv2563 c19he33y c1tzka7y c1fw1o1g c3qpdmb cg3ed2r cqq48kh c1sxv1yc c19g8bdq c1uxrb91 c5xux6h cyxijnb c9hsh8s caiwi1d cd13apy cwsnnse c1v8h2xf cc26d5s c1x9n9r3 c1re91zw ctns64h c1qtkadx cducuv6 c1umuk3b ci31kyj ck859ur`}>
<Heading
tag={"h2"}
className={`w-heading cuhj26k c105ypcg c1ug6hox c1kgwakr cxzg5y8 c1g4ldx4`}>
{"Enterprise-Grade Security"}
</Heading>
<Paragraph
className={`w-paragraph c1fhajh8 c1ukewas`}>
{"Your data’s safety is our priority with state-of-the-art encryption and compliance."}
</Paragraph>
</TabsTrigger>
</TabsList>
<TabsContent
data-ws-index="0"
className={`w-tab-content c3uwkx5 c18ww0nc cyezbf c150vyme cvxedyg c1jgs2to c19fdr6a c1lyb5m crd04pn`}>
<Image
src={"/assets/01_qAe6IVn6arEjFz5uIfHyp.png"}
width={887}
height={1131}
alt={"AI driven efficiency"}
className={`w-image`} />
</TabsContent>
<TabsContent
data-ws-index="1"
className={`w-tab-content c3uwkx5 c18ww0nc cyezbf c150vyme cvxedyg c1jgs2to c19fdr6a c1lyb5m crd04pn`}>
<Image
src={"/assets/02_c4D7AUUFuuXpm-LZA2byx.png"}
width={887}
height={1131}
alt={"Integration with 200+ tools"}
className={`w-image`} />
</TabsContent>
<TabsContent
data-ws-index="2"
className={`w-tab-content cyezbf c150vyme cvxedyg c1jgs2to c19fdr6a c1lyb5m crd04pn`}>
<Image
src={"/assets/03_6U_cwq9fyk9bRjWDkVql5.png"}
width={887}
height={1131}
alt={"Your data's safety"}
className={`w-image`} />
</TabsContent>
</Tabs>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box c1n6yfnd c123cnm2 ${""}`}>
<Box
className={`w-box c1ol7wjx c177vjgx cs1bscr c165pql3 c2fr2xh c1pynuco`}>
<Heading
tag={"h2"}
className={`w-heading c1ugtogh c105ypcg c1ug6hox c1kgwakr cxzg5y8 c1p8keq5`}>
{"How it works"}
</Heading>
<Box
className={`w-box c12tm2jm chqjjxd c225rgb ctw5yoj ccgujav cs11vxi c10al51t chwj9lu c6j03fk c1ue1l8o ${""}`}>
<Box
className={`w-box c1wre12j c7svi18 cgl4byf cm0vsyb cekof3b ch3tzeq c1b66trm ctfr1b7 c3hkj93 ${""}`}>
<Box
className={`w-box c19cbxyg c4e00g1 c1l4flfb c7voop4 cww5kia c1roator c16dy8q6`}>
<Image
src={"/assets/Board01_pEc9M5hzYqPysWmSyVoaK.png"}
width={762}
height={682}
className={`w-image`} />
</Box>
<Box
className={`w-box c9rrarx c1srpweh c1r6yjab c1uxrb91 cm4b8nk c3a826z c1wp1mp9 c1boufi4 cyjel2r`}>
<Heading
tag={"h3"}
className={`w-heading ceedd2 c105ypcg c1ug6hox c1kgwakr cxzg5y8 c32c1ro`}>
{"Design Your Workflow"}
</Heading>
<Paragraph
className={`w-paragraph c1fhajh8`}>
{"Drag and drop components to create the perfect workflow."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box c1wre12j c7svi18 cgl4byf cm0vsyb cekof3b ch3tzeq c1b66trm ctfr1b7 c3hkj93 ${""}`}>
<Box
className={`w-box c19cbxyg c4e00g1 c1l4flfb c7voop4 cww5kia c1roator c16dy8q6`}>
<Image
src={"/assets/Board02_s3JnOuD3CLvWBw0CJASWa.png"}
width={762}
height={682}
className={`w-image`} />
</Box>
<Box
className={`w-box c9rrarx c1srpweh c1r6yjab c1uxrb91 cm4b8nk c3a826z c1wp1mp9 c1boufi4 cyjel2r`}>
<Heading
tag={"h3"}
className={`w-heading ceedd2 c105ypcg c1ug6hox c1kgwakr cxzg5y8 c32c1ro`}>
{"Connect Your Tools"}
</Heading>
<Paragraph
className={`w-paragraph c1fhajh8`}>
{"Integrate seamlessly with your existing software ecosystem."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box c1wre12j c7svi18 cgl4byf cm0vsyb cekof3b ch3tzeq c1b66trm ctfr1b7 c3hkj93 ${""}`}>
<Box
className={`w-box c19cbxyg c4e00g1 c1l4flfb c7voop4 cww5kia c1roator c16dy8q6`}>
<Image
src={"/assets/Board03_G5dPLo1x0VF4c0E_FA4B9.png"}
width={762}
height={682}
className={`w-image`} />
</Box>
<Box
className={`w-box c9rrarx c1srpweh c1r6yjab c1uxrb91 cm4b8nk c3a826z c1wp1mp9 c1boufi4 cyjel2r`}>
<Heading
tag={"h3"}
className={`w-heading ceedd2 c105ypcg c1ug6hox c1kgwakr cxzg5y8 c32c1ro`}>
{"Automate with AI"}
</Heading>
<Paragraph
className={`w-paragraph c1fhajh8`}>
{"Let AI handle the heavy lifting while you focus on strategy"}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box c1n6yfnd c123cnm2`}>
<Box
className={`w-box c1ol7wjx c177vjgx cs1bscr c165pql3 c2fr2xh c1pynuco`}>
<Box
className={`w-box c1wre12j cgu2mxi ca43yih c10oyza c1wos6fr c6j03fk c1ue1l8o caievlo chwj9lu`}>
<Box
className={`w-box cyezbf c1wre12j c19qdlvg croij3h c7svi18 c1c7caon c1j2ctuz c4tfqvz cywl4ns c1dveily cr8tiwi crd04pn c10oyza c1wos6fr`}>
<Box
className={`w-box c1wre12j c7svi18 c19qdlvg croij3h c1c7caon c1j2ctuz c1srpweh c10oyza c1wos6fr cvk7xdy`}>
<Heading
tag={"h2"}
className={`w-heading c1ugtogh c105ypcg c1ug6hox c1kgwakr cxzg5y8 c1hei7oo cuunj2z`}>
{"Use cases to workflow your business and unlock productivity"}
</Heading>
<Text
className={`w-text chr0m95`}>
{"Experience the power of streamlined workflows."}
</Text>
</Box>
<Button
type={"button"}
className={`w-button c12h1spu c4ctj73 cq4mukj c6iiy3n cnd39nk cpb2v0v c3a826z c1wp1mp9 c1boufi4 cyjel2r cqxsnw5 c1sxv1yc c12kd1bb cu4zxnc c1c1f9dt c1mp6d9l cv7u2xn cbn1j8k ctsm033 c10fig1y c1mwlu3r c8zx3th c1vl04mr cxmc7as c1gk3qsy c1ldlu7o`}>
{"Get started for free"}
</Button>
</Box>
<Box
className={`w-box cyezbf c1wre12j c7svi18 c3uwkx5 croij3h c1c7caon c1j2ctuz cm6qypi c14mjzkc c1hei7oo cuthf9u c1fvoyvi`}>
<Box
className={`w-box c9rrarx c3a826z c1wp1mp9 c1boufi4 cyjel2r c1wre12j c7svi18 cxa0lpq ccgujav c2cow57 cugz8nj crk9jw4 c1f5wv5 c1q7npga c1j0y42x cxkd7w7 c45k2m3 c173hpie c1dveily c4tfqvz c1pzzx7g ctns64h c1qv59gd c18mxjj6 crbdmlv cgr5sm6 cr8tiwi`}>
<Box
className={`w-box c19vf4mr ckerai1 c15clhgi cixmeh0 c192ae6g c1pczcgv c1ad8d7a c1wre12j c3uwkx5 c18ww0nc`}>
<HtmlEmbed
code={"<!--?xml version=\"1.0\" encoding=\"UTF-8\"?--><svg width=\"32\" height=\"32\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"17\" y=\"6\" width=\"14\" height=\"9\" fill=\"none\" stroke=\"#0be3af\" stroke-width=\"2\" stroke-linejoin=\"round\"></rect><rect x=\"6\" y=\"33\" width=\"14\" height=\"9\" fill=\"none\" stroke=\"#0be3af\" stroke-width=\"2\" stroke-linejoin=\"round\"></rect><rect x=\"28\" y=\"33\" width=\"14\" height=\"9\" fill=\"none\" stroke=\"#0be3af\" stroke-width=\"2\" stroke-linejoin=\"round\"></rect><path d=\"M24 16V24\" stroke=\"#0be3af\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M13 33V24H35V33\" stroke=\"#0be3af\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Heading
tag={"h3"}
className={`w-heading cuhj26k c105ypcg c1ug6hox c1kgwakr cxzg5y8`}>
{"Employee Onboarding"}
</Heading>
<Text
className={`w-text c1fhajh8 cg9jk3k`}>
{"Automate HR workflows to onboard new hires in minutes."}
</Text>
</Box>
<Box
className={`w-box c9rrarx c3a826z c1wp1mp9 c1boufi4 cyjel2r c1wre12j c7svi18 cxa0lpq ccgujav c2cow57 cugz8nj crk9jw4 c1f5wv5 c1q7npga c1j0y42x cxkd7w7 c45k2m3 c173hpie c1dveily cwcd82t c1pzzx7g ctns64h c1qv59gd c18mxjj6 crbdmlv cgr5sm6 cr8tiwi`}>
<Box
className={`w-box c19vf4mr ckerai1 c15clhgi cixmeh0 c192ae6g c1pczcgv c1ad8d7a c1wre12j c3uwkx5 c18ww0nc`}>
<HtmlEmbed
code={"<!--?xml version=\"1.0\" encoding=\"UTF-8\"?--><svg width=\"32\" height=\"32\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22 8V20C22 22.2091 17.9706 24 13 24C8.02944 24 4 22.2091 4 20V8\" stroke=\"#0be3af\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M22 14C22 16.2091 17.9706 18 13 18C8.02944 18 4 16.2091 4 14\" stroke=\"#0be3af\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M22 8C22 10.2091 17.9706 12 13 12C8.02944 12 4 10.2091 4 8C4 5.79086 8.02944 4 13 4C17.9706 4 22 5.79086 22 8Z\" fill=\"none\" stroke=\"#0be3af\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M32 6H38C40.2091 6 42 7.79086 42 10V16\" stroke=\"#0be3af\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M16 42H10C7.79086 42 6 40.2091 6 38V32\" stroke=\"#0be3af\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M35 38V44\" stroke=\"#0be3af\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M41 44H35H29\" stroke=\"#0be3af\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M44 38V26H26V38H44Z\" fill=\"none\" stroke=\"#0be3af\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Heading
tag={"h3"}
className={`w-heading cuhj26k c105ypcg c1ug6hox c1kgwakr cxzg5y8`}>
{"Data Syncing"}
</Heading>
<Text
className={`w-text c1fhajh8 cg9jk3k`}>
{"Keep your CRM, email, and project management tools perfectly aligned."}
</Text>
</Box>
<Box
className={`w-box c9rrarx c3a826z c1wp1mp9 c1boufi4 cyjel2r c1wre12j c7svi18 cxa0lpq ccgujav c2cow57 cugz8nj crk9jw4 c1f5wv5 c1q7npga c1j0y42x cxkd7w7 c45k2m3 c173hpie c1dveily c9iavth c1pzzx7g ctns64h c1qv59gd c18mxjj6 crbdmlv cgr5sm6 cr8tiwi`}>
<Box
className={`w-box c19vf4mr ckerai1 c15clhgi cixmeh0 c192ae6g c1pczcgv c1ad8d7a c1wre12j c3uwkx5 c18ww0nc`}>
<HtmlEmbed
code={"<!--?xml version=\"1.0\" encoding=\"UTF-8\"?--><svg width=\"32\" height=\"32\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M36 32C40.4183 32 44 28.4183 44 24C44 19.5817 40.4183 16 36 16\" fill=\"none\"></path><path d=\"M36 32V32C40.4183 32 44 28.4183 44 24C44 19.5817 40.4183 16 36 16\" stroke=\"#0be3af\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><path d=\"M12 16C7.58172 16 4 19.5817 4 24C4 28.4183 7.58172 32 12 32\" fill=\"none\"></path><path d=\"M12 16C7.58172 16 4 19.5817 4 24C4 28.4183 7.58172 32 12 32V32\" stroke=\"#0be3af\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><path d=\"M12 32V31.5V29V24V16C12 9.37258 17.3726 4 24 4C30.6274 4 36 9.37258 36 16V32C36 38.6274 30.6274 44 24 44\" stroke=\"#0be3af\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Heading
tag={"h3"}
className={`w-heading cuhj26k c105ypcg c1ug6hox c1kgwakr cxzg5y8`}>
{"Customer Support"}
</Heading>
<Text
className={`w-text c1fhajh8 cg9jk3k`}>
{"Reduce response times and improve customer satisfaction with automated ticket routing."}
</Text>
</Box>
</Box>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box`}>
<Box
className={`w-box c1ol7wjx c177vjgx cs1bscr c165pql3 c2fr2xh c1pynuco`}>
<Box
className={`w-box cugz8nj crk9jw4 c1f5wv5 c1q7npga cypusvi c1uvv63v caewjba cdk1q4e c1j0y42x cxkd7w7 c45k2m3 c173hpie c1wre12j c7svi18 c1eabupn cm6qypi c40og58 cz08mpv c19cbxyg c4e00g1 c1m5ttfn c1f5t6k0 c13bpm8n cj4kh3d`}>
<Box
className={`w-box c1mc3xag c33ehv c1wre12j ctfr1b7 chwj9lu cyz8izi cd5t1s7 c10oyza c1wos6fr c1uksi9t c1by7d84`}>
<Heading
tag={"h2"}
className={`w-heading cuhj26k c105ypcg c1ug6hox c1kgwakr cxzg5y8 c1qcqmty cuunj2z`}>
{"See why our customers love using Flowint"}
</Heading>
<Box
className={`w-box c175oqs7 c1r6yjab c1u51o1f cm4b8nk c1pruj1h c192nzbd c1asypxa c1lb4xd3 cugz8nj crk9jw4 c1f5wv5 c1q7npga c1j0y42x cxkd7w7 c45k2m3 c173hpie c1wre12j c1j2ctuz c1c7caon c3uwkx5 croij3h c9rrarx c1yacw5f cdy3onf cv6qh2b cy5mabc chzmqf4 cq52kx1 cd6e13v chqjjxd c1i7iv8x cu1vdaj c6dt6te cswnh9z`}>
<Box
className={`w-box c1wre12j`}>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 clfhgd7 cb9piqw`}>
<Image
src={"/assets/avatar-1_fiuZgx7qcKEP7Yz0WL4aH.png"}
width={60}
height={60}
className={`w-image`} />
</Box>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 clfhgd7 cb9piqw`}>
<Image
src={"/assets/avatar-2_wlMiwY8yKhL4RavLFxKDj.png"}
width={60}
height={60}
className={`w-image`} />
</Box>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 clfhgd7 cb9piqw`}>
<Image
src={"/assets/avatar-3_48E3SzRpro_xJkbOsqD7H.png"}
width={60}
height={60}
className={`w-image`} />
</Box>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 clfhgd7 cb9piqw`}>
<Image
src={"/assets/avatar-4_w0IowgVbu0dxTzEktnoSc.png"}
width={60}
height={60}
className={`w-image`} />
</Box>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 clfhgd7 cb9piqw`}>
<Image
src={"/assets/avatar-5_L5VUgC7M6-0H1sI24Fyi7.png"}
width={60}
height={60}
className={`w-image`} />
</Box>
</Box>
<Box
className={`w-box cg2nswf c15upkr7 c170gx0v cxgpju8 c1k2mexn`} />
<Box
className={`w-box c118ji7k c11ntkaz`}>
<Box
className={`w-box c1wre12j c3uwkx5 croij3h ccgujav cxa0lpq`}>
<HtmlEmbed
code={"<!--?xml version=\"1.0\" encoding=\"UTF-8\"?--><svg width=\"32\" height=\"32\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z\" fill=\"#b3ffee\" stroke=\"#0be3af\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"}
className={`w-html-embed`} />
<Text
tag={"span"}
className={`w-text`}>
{"Trusted by 12,000+ users"}
</Text>
</Box>
</Box>
</Box>
</Box>
<Box
className={`w-box c1wre12j c19kkvla cnvjxnw c1nhqm0b ${""}`}>
<HtmlEmbed
code={"<style>\n  \n@keyframes cards-scroll {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(calc(-100% - 1.5rem));\n  }\n}\n\n.cards-scroll {\n  animation: cards-scroll 20s linear infinite;\n}\n</style>"}
executeScriptOnCanvas={true}
className={`w-html-embed`} />
<Box
className={`w-box c1wre12j c19kkvla cnvjxnw c2fr2xh crfnq4z c11ntkaz ${"cards-scroll"}`}>
<Box
className={`w-box c9rrarx c3a826z c1wp1mp9 c1boufi4 cyjel2r c1wre12j c7svi18 cxa0lpq ccgujav c2cow57 cugz8nj crk9jw4 c1f5wv5 c1q7npga c1j0y42x cxkd7w7 c45k2m3 c173hpie c1dveily c9iavth c1pzzx7g ctns64h c1qv59gd c18mxjj6 crbdmlv cgr5sm6`}>
<Box
className={`w-box c19vf4mr ckerai1 c15clhgi cixmeh0 c192ae6g c1pczcgv c1ad8d7a c1wre12j c3uwkx5 c18ww0nc`}>
<HtmlEmbed
code={"<!--?xml version=\"1.0\" encoding=\"UTF-8\"?--><svg width=\"32\" height=\"32\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.8533 9.11587C11.3227 13.9521 7.13913 19.5811 6.30256 26.0028C5.00021 35.9999 13.9404 40.8932 18.4703 36.4966C23.0002 32.1 20.2848 26.5195 17.0047 24.9941C13.7246 23.4686 11.7187 23.9999 12.0686 21.9614C12.4185 19.923 17.0851 14.2712 21.1849 11.6391C21.4569 11.4078 21.5604 10.959 21.2985 10.6185C21.1262 10.3946 20.7883 9.95545 20.2848 9.30102C19.8445 8.72875 19.4227 8.75017 18.8533 9.11587Z\" fill=\"#0be3af\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.6789 9.11587C31.1484 13.9521 26.9648 19.5811 26.1282 26.0028C24.8259 35.9999 33.7661 40.8932 38.296 36.4966C42.8259 32.1 40.1105 26.5195 36.8304 24.9941C33.5503 23.4686 31.5443 23.9999 31.8943 21.9614C32.2442 19.923 36.9108 14.2712 41.0106 11.6391C41.2826 11.4078 41.3861 10.959 41.1241 10.6185C40.9519 10.3946 40.614 9.95545 40.1105 9.30102C39.6702 8.72875 39.2484 8.75017 38.6789 9.11587Z\" fill=\"#0be3af\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Text
className={`w-text cg9jk3k c1fhajh8`}>
{"This platform has completely revolutionized how we manage workflows. It’s intuitive, powerful, and secure."}
</Text>
<Box
className={`w-box c1wre12j ccgujav cxa0lpq c3uwkx5 croij3h`}>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 crfnq4z c11ntkaz`}>
<Image
src={"/assets/avatar-4_w0IowgVbu0dxTzEktnoSc.png"}
width={60}
height={60}
alt={"testimonial avatar"}
className={`w-image`} />
</Box>
<Text
className={`w-text cxqoek0`}>
<Bold
className={`w-bold-text`}>
{"Jane"}
</Bold>
{", CTO at The Company"}
</Text>
</Box>
</Box>
<Box
className={`w-box c9rrarx c3a826z c1wp1mp9 c1boufi4 cyjel2r c1wre12j c7svi18 cxa0lpq ccgujav c2cow57 cugz8nj crk9jw4 c1f5wv5 c1q7npga c1j0y42x cxkd7w7 c45k2m3 c173hpie c1dveily c9iavth c1pzzx7g ctns64h c1qv59gd c18mxjj6 crbdmlv cgr5sm6`}>
<Box
className={`w-box c19vf4mr ckerai1 c15clhgi cixmeh0 c192ae6g c1pczcgv c1ad8d7a c1wre12j c3uwkx5 c18ww0nc`}>
<HtmlEmbed
code={"<!--?xml version=\"1.0\" encoding=\"UTF-8\"?--><svg width=\"32\" height=\"32\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.8533 9.11587C11.3227 13.9521 7.13913 19.5811 6.30256 26.0028C5.00021 35.9999 13.9404 40.8932 18.4703 36.4966C23.0002 32.1 20.2848 26.5195 17.0047 24.9941C13.7246 23.4686 11.7187 23.9999 12.0686 21.9614C12.4185 19.923 17.0851 14.2712 21.1849 11.6391C21.4569 11.4078 21.5604 10.959 21.2985 10.6185C21.1262 10.3946 20.7883 9.95545 20.2848 9.30102C19.8445 8.72875 19.4227 8.75017 18.8533 9.11587Z\" fill=\"#0be3af\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.6789 9.11587C31.1484 13.9521 26.9648 19.5811 26.1282 26.0028C24.8259 35.9999 33.7661 40.8932 38.296 36.4966C42.8259 32.1 40.1105 26.5195 36.8304 24.9941C33.5503 23.4686 31.5443 23.9999 31.8943 21.9614C32.2442 19.923 36.9108 14.2712 41.0106 11.6391C41.2826 11.4078 41.3861 10.959 41.1241 10.6185C40.9519 10.3946 40.614 9.95545 40.1105 9.30102C39.6702 8.72875 39.2484 8.75017 38.6789 9.11587Z\" fill=\"#0be3af\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Text
className={`w-text cg9jk3k c1fhajh8`}>
{"This platform has completely revolutionized how we manage workflows. It’s intuitive, powerful, and secure."}
</Text>
<Box
className={`w-box c1wre12j ccgujav cxa0lpq c3uwkx5 croij3h`}>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 crfnq4z c11ntkaz`}>
<Image
src={"/assets/avatar-1_fiuZgx7qcKEP7Yz0WL4aH.png"}
width={60}
height={60}
alt={"testimonial avatar"}
className={`w-image`} />
</Box>
<Text
className={`w-text cxqoek0`}>
<Bold
className={`w-bold-text`}>
{"Maria"}
</Bold>
{", CTO at The Company"}
</Text>
</Box>
</Box>
<Box
className={`w-box c9rrarx c3a826z c1wp1mp9 c1boufi4 cyjel2r c1wre12j c7svi18 cxa0lpq ccgujav c2cow57 cugz8nj crk9jw4 c1f5wv5 c1q7npga c1j0y42x cxkd7w7 c45k2m3 c173hpie c1dveily c9iavth c1pzzx7g ctns64h c1qv59gd c18mxjj6 crbdmlv cgr5sm6`}>
<Box
className={`w-box c19vf4mr ckerai1 c15clhgi cixmeh0 c192ae6g c1pczcgv c1ad8d7a c1wre12j c3uwkx5 c18ww0nc`}>
<HtmlEmbed
code={"<!--?xml version=\"1.0\" encoding=\"UTF-8\"?--><svg width=\"32\" height=\"32\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.8533 9.11587C11.3227 13.9521 7.13913 19.5811 6.30256 26.0028C5.00021 35.9999 13.9404 40.8932 18.4703 36.4966C23.0002 32.1 20.2848 26.5195 17.0047 24.9941C13.7246 23.4686 11.7187 23.9999 12.0686 21.9614C12.4185 19.923 17.0851 14.2712 21.1849 11.6391C21.4569 11.4078 21.5604 10.959 21.2985 10.6185C21.1262 10.3946 20.7883 9.95545 20.2848 9.30102C19.8445 8.72875 19.4227 8.75017 18.8533 9.11587Z\" fill=\"#0be3af\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.6789 9.11587C31.1484 13.9521 26.9648 19.5811 26.1282 26.0028C24.8259 35.9999 33.7661 40.8932 38.296 36.4966C42.8259 32.1 40.1105 26.5195 36.8304 24.9941C33.5503 23.4686 31.5443 23.9999 31.8943 21.9614C32.2442 19.923 36.9108 14.2712 41.0106 11.6391C41.2826 11.4078 41.3861 10.959 41.1241 10.6185C40.9519 10.3946 40.614 9.95545 40.1105 9.30102C39.6702 8.72875 39.2484 8.75017 38.6789 9.11587Z\" fill=\"#0be3af\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Text
className={`w-text cg9jk3k c1fhajh8`}>
{"This platform has completely revolutionized how we manage workflows. It’s intuitive, powerful, and secure."}
</Text>
<Box
className={`w-box c1wre12j ccgujav cxa0lpq c3uwkx5 croij3h`}>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 crfnq4z c11ntkaz`}>
<Image
src={"/assets/avatar-2_wlMiwY8yKhL4RavLFxKDj.png"}
width={60}
height={60}
alt={"testimonial avatar"}
className={`w-image`} />
</Box>
<Text
className={`w-text cxqoek0`}>
<Bold
className={`w-bold-text`}>
{"Heitor"}
</Bold>
{", CTO at The Company"}
</Text>
</Box>
</Box>
</Box>
<Box
className={`w-box c1wre12j c19kkvla cnvjxnw c2fr2xh crfnq4z c11ntkaz ${"cards-scroll"}`}>
<Box
className={`w-box c9rrarx c3a826z c1wp1mp9 c1boufi4 cyjel2r c1wre12j c7svi18 cxa0lpq ccgujav c2cow57 cugz8nj crk9jw4 c1f5wv5 c1q7npga c1j0y42x cxkd7w7 c45k2m3 c173hpie c1dveily c9iavth c1pzzx7g ctns64h c1qv59gd c18mxjj6 crbdmlv cgr5sm6`}>
<Box
className={`w-box c19vf4mr ckerai1 c15clhgi cixmeh0 c192ae6g c1pczcgv c1ad8d7a c1wre12j c3uwkx5 c18ww0nc`}>
<HtmlEmbed
code={"<!--?xml version=\"1.0\" encoding=\"UTF-8\"?--><svg width=\"32\" height=\"32\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.8533 9.11587C11.3227 13.9521 7.13913 19.5811 6.30256 26.0028C5.00021 35.9999 13.9404 40.8932 18.4703 36.4966C23.0002 32.1 20.2848 26.5195 17.0047 24.9941C13.7246 23.4686 11.7187 23.9999 12.0686 21.9614C12.4185 19.923 17.0851 14.2712 21.1849 11.6391C21.4569 11.4078 21.5604 10.959 21.2985 10.6185C21.1262 10.3946 20.7883 9.95545 20.2848 9.30102C19.8445 8.72875 19.4227 8.75017 18.8533 9.11587Z\" fill=\"#0be3af\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.6789 9.11587C31.1484 13.9521 26.9648 19.5811 26.1282 26.0028C24.8259 35.9999 33.7661 40.8932 38.296 36.4966C42.8259 32.1 40.1105 26.5195 36.8304 24.9941C33.5503 23.4686 31.5443 23.9999 31.8943 21.9614C32.2442 19.923 36.9108 14.2712 41.0106 11.6391C41.2826 11.4078 41.3861 10.959 41.1241 10.6185C40.9519 10.3946 40.614 9.95545 40.1105 9.30102C39.6702 8.72875 39.2484 8.75017 38.6789 9.11587Z\" fill=\"#0be3af\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Text
className={`w-text cg9jk3k c1fhajh8`}>
{"This platform has completely revolutionized how we manage workflows. It’s intuitive, powerful, and secure."}
</Text>
<Box
className={`w-box c1wre12j ccgujav cxa0lpq c3uwkx5 croij3h`}>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 crfnq4z c11ntkaz`}>
<Image
src={"/assets/avatar-4_w0IowgVbu0dxTzEktnoSc.png"}
width={60}
height={60}
alt={"testimonial avatar"}
className={`w-image`} />
</Box>
<Text
className={`w-text cxqoek0`}>
<Bold
className={`w-bold-text`}>
{"Jane"}
</Bold>
{", CTO at The Company"}
</Text>
</Box>
</Box>
<Box
className={`w-box c9rrarx c3a826z c1wp1mp9 c1boufi4 cyjel2r c1wre12j c7svi18 cxa0lpq ccgujav c2cow57 cugz8nj crk9jw4 c1f5wv5 c1q7npga c1j0y42x cxkd7w7 c45k2m3 c173hpie c1dveily c9iavth c1pzzx7g ctns64h c1qv59gd c18mxjj6 crbdmlv cgr5sm6`}>
<Box
className={`w-box c19vf4mr ckerai1 c15clhgi cixmeh0 c192ae6g c1pczcgv c1ad8d7a c1wre12j c3uwkx5 c18ww0nc`}>
<HtmlEmbed
code={"<!--?xml version=\"1.0\" encoding=\"UTF-8\"?--><svg width=\"32\" height=\"32\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.8533 9.11587C11.3227 13.9521 7.13913 19.5811 6.30256 26.0028C5.00021 35.9999 13.9404 40.8932 18.4703 36.4966C23.0002 32.1 20.2848 26.5195 17.0047 24.9941C13.7246 23.4686 11.7187 23.9999 12.0686 21.9614C12.4185 19.923 17.0851 14.2712 21.1849 11.6391C21.4569 11.4078 21.5604 10.959 21.2985 10.6185C21.1262 10.3946 20.7883 9.95545 20.2848 9.30102C19.8445 8.72875 19.4227 8.75017 18.8533 9.11587Z\" fill=\"#0be3af\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.6789 9.11587C31.1484 13.9521 26.9648 19.5811 26.1282 26.0028C24.8259 35.9999 33.7661 40.8932 38.296 36.4966C42.8259 32.1 40.1105 26.5195 36.8304 24.9941C33.5503 23.4686 31.5443 23.9999 31.8943 21.9614C32.2442 19.923 36.9108 14.2712 41.0106 11.6391C41.2826 11.4078 41.3861 10.959 41.1241 10.6185C40.9519 10.3946 40.614 9.95545 40.1105 9.30102C39.6702 8.72875 39.2484 8.75017 38.6789 9.11587Z\" fill=\"#0be3af\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Text
className={`w-text cg9jk3k c1fhajh8`}>
{"This platform has completely revolutionized how we manage workflows. It’s intuitive, powerful, and secure."}
</Text>
<Box
className={`w-box c1wre12j ccgujav cxa0lpq c3uwkx5 croij3h`}>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 crfnq4z c11ntkaz`}>
<Image
src={"/assets/avatar-1_fiuZgx7qcKEP7Yz0WL4aH.png"}
width={60}
height={60}
alt={"testimonial avatar"}
className={`w-image`} />
</Box>
<Text
className={`w-text cxqoek0`}>
<Bold
className={`w-bold-text`}>
{"Maria"}
</Bold>
{", CTO at The Company"}
</Text>
</Box>
</Box>
<Box
className={`w-box c9rrarx c3a826z c1wp1mp9 c1boufi4 cyjel2r c1wre12j c7svi18 cxa0lpq ccgujav c2cow57 cugz8nj crk9jw4 c1f5wv5 c1q7npga c1j0y42x cxkd7w7 c45k2m3 c173hpie c1dveily c9iavth c1pzzx7g ctns64h c1qv59gd c18mxjj6 crbdmlv cgr5sm6`}>
<Box
className={`w-box c19vf4mr ckerai1 c15clhgi cixmeh0 c192ae6g c1pczcgv c1ad8d7a c1wre12j c3uwkx5 c18ww0nc`}>
<HtmlEmbed
code={"<!--?xml version=\"1.0\" encoding=\"UTF-8\"?--><svg width=\"32\" height=\"32\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.8533 9.11587C11.3227 13.9521 7.13913 19.5811 6.30256 26.0028C5.00021 35.9999 13.9404 40.8932 18.4703 36.4966C23.0002 32.1 20.2848 26.5195 17.0047 24.9941C13.7246 23.4686 11.7187 23.9999 12.0686 21.9614C12.4185 19.923 17.0851 14.2712 21.1849 11.6391C21.4569 11.4078 21.5604 10.959 21.2985 10.6185C21.1262 10.3946 20.7883 9.95545 20.2848 9.30102C19.8445 8.72875 19.4227 8.75017 18.8533 9.11587Z\" fill=\"#0be3af\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.6789 9.11587C31.1484 13.9521 26.9648 19.5811 26.1282 26.0028C24.8259 35.9999 33.7661 40.8932 38.296 36.4966C42.8259 32.1 40.1105 26.5195 36.8304 24.9941C33.5503 23.4686 31.5443 23.9999 31.8943 21.9614C32.2442 19.923 36.9108 14.2712 41.0106 11.6391C41.2826 11.4078 41.3861 10.959 41.1241 10.6185C40.9519 10.3946 40.614 9.95545 40.1105 9.30102C39.6702 8.72875 39.2484 8.75017 38.6789 9.11587Z\" fill=\"#0be3af\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Text
className={`w-text cg9jk3k c1fhajh8`}>
{"This platform has completely revolutionized how we manage workflows. It’s intuitive, powerful, and secure."}
</Text>
<Box
className={`w-box c1wre12j ccgujav cxa0lpq c3uwkx5 croij3h`}>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 crfnq4z c11ntkaz`}>
<Image
src={"/assets/avatar-2_wlMiwY8yKhL4RavLFxKDj.png"}
width={60}
height={60}
alt={"testimonial avatar"}
className={`w-image`} />
</Box>
<Text
className={`w-text cxqoek0`}>
<Bold
className={`w-bold-text`}>
{"Heitor"}
</Bold>
{", CTO at The Company"}
</Text>
</Box>
</Box>
</Box>
</Box>
<Box
className={`w-box cgv3d8u c19kkvla cnvjxnw c10al51t chlc5ko cq9jx0c ${""}`}>
<Box
className={`w-box c1wre12j c19kkvla cnvjxnw c2fr2xh crfnq4z c11ntkaz chwj9lu c10oyza c1wos6fr c1hei7oo c71gsvf ce8r0ff c1lw81pi ${""}`}>
<Box
className={`w-box c9rrarx c3a826z c1wp1mp9 c1boufi4 cyjel2r c1wre12j c7svi18 cxa0lpq ccgujav c2cow57 cugz8nj crk9jw4 c1f5wv5 c1q7npga c1j0y42x cxkd7w7 c45k2m3 c173hpie c1dveily c9iavth c1pzzx7g ctns64h c1qv59gd c18mxjj6 crbdmlv cgr5sm6`}>
<Box
className={`w-box c19vf4mr ckerai1 c15clhgi cixmeh0 c192ae6g c1pczcgv c1ad8d7a c1wre12j c3uwkx5 c18ww0nc`}>
<HtmlEmbed
code={"<!--?xml version=\"1.0\" encoding=\"UTF-8\"?--><svg width=\"32\" height=\"32\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.8533 9.11587C11.3227 13.9521 7.13913 19.5811 6.30256 26.0028C5.00021 35.9999 13.9404 40.8932 18.4703 36.4966C23.0002 32.1 20.2848 26.5195 17.0047 24.9941C13.7246 23.4686 11.7187 23.9999 12.0686 21.9614C12.4185 19.923 17.0851 14.2712 21.1849 11.6391C21.4569 11.4078 21.5604 10.959 21.2985 10.6185C21.1262 10.3946 20.7883 9.95545 20.2848 9.30102C19.8445 8.72875 19.4227 8.75017 18.8533 9.11587Z\" fill=\"#0be3af\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.6789 9.11587C31.1484 13.9521 26.9648 19.5811 26.1282 26.0028C24.8259 35.9999 33.7661 40.8932 38.296 36.4966C42.8259 32.1 40.1105 26.5195 36.8304 24.9941C33.5503 23.4686 31.5443 23.9999 31.8943 21.9614C32.2442 19.923 36.9108 14.2712 41.0106 11.6391C41.2826 11.4078 41.3861 10.959 41.1241 10.6185C40.9519 10.3946 40.614 9.95545 40.1105 9.30102C39.6702 8.72875 39.2484 8.75017 38.6789 9.11587Z\" fill=\"#0be3af\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Text
className={`w-text cg9jk3k c1fhajh8`}>
{"This platform has completely revolutionized how we manage workflows. It’s intuitive, powerful, and secure."}
</Text>
<Box
className={`w-box c1wre12j ccgujav cxa0lpq c3uwkx5 croij3h`}>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 crfnq4z c11ntkaz`}>
<Image
src={"/assets/avatar-4_w0IowgVbu0dxTzEktnoSc.png"}
width={60}
height={60}
className={`w-image`} />
</Box>
<Text
className={`w-text cxqoek0`}>
<Bold
className={`w-bold-text`}>
{"Jane"}
</Bold>
{", CTO at The Company"}
</Text>
</Box>
</Box>
<Box
className={`w-box c9rrarx c3a826z c1wp1mp9 c1boufi4 cyjel2r c1wre12j c7svi18 cxa0lpq ccgujav c2cow57 cugz8nj crk9jw4 c1f5wv5 c1q7npga c1j0y42x cxkd7w7 c45k2m3 c173hpie c1dveily c9iavth c1pzzx7g ctns64h c1qv59gd c18mxjj6 crbdmlv cgr5sm6`}>
<Box
className={`w-box c19vf4mr ckerai1 c15clhgi cixmeh0 c192ae6g c1pczcgv c1ad8d7a c1wre12j c3uwkx5 c18ww0nc`}>
<HtmlEmbed
code={"<!--?xml version=\"1.0\" encoding=\"UTF-8\"?--><svg width=\"32\" height=\"32\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.8533 9.11587C11.3227 13.9521 7.13913 19.5811 6.30256 26.0028C5.00021 35.9999 13.9404 40.8932 18.4703 36.4966C23.0002 32.1 20.2848 26.5195 17.0047 24.9941C13.7246 23.4686 11.7187 23.9999 12.0686 21.9614C12.4185 19.923 17.0851 14.2712 21.1849 11.6391C21.4569 11.4078 21.5604 10.959 21.2985 10.6185C21.1262 10.3946 20.7883 9.95545 20.2848 9.30102C19.8445 8.72875 19.4227 8.75017 18.8533 9.11587Z\" fill=\"#0be3af\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.6789 9.11587C31.1484 13.9521 26.9648 19.5811 26.1282 26.0028C24.8259 35.9999 33.7661 40.8932 38.296 36.4966C42.8259 32.1 40.1105 26.5195 36.8304 24.9941C33.5503 23.4686 31.5443 23.9999 31.8943 21.9614C32.2442 19.923 36.9108 14.2712 41.0106 11.6391C41.2826 11.4078 41.3861 10.959 41.1241 10.6185C40.9519 10.3946 40.614 9.95545 40.1105 9.30102C39.6702 8.72875 39.2484 8.75017 38.6789 9.11587Z\" fill=\"#0be3af\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Text
className={`w-text cg9jk3k c1fhajh8`}>
{"This platform has completely revolutionized how we manage workflows. It’s intuitive, powerful, and secure."}
</Text>
<Box
className={`w-box c1wre12j ccgujav cxa0lpq c3uwkx5 croij3h`}>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 crfnq4z c11ntkaz`}>
<Image
src={"/assets/avatar-1_fiuZgx7qcKEP7Yz0WL4aH.png"}
width={60}
height={60}
className={`w-image`} />
</Box>
<Text
className={`w-text cxqoek0`}>
<Bold
className={`w-bold-text`}>
{"Maria"}
</Bold>
{", CTO at The Company"}
</Text>
</Box>
</Box>
<Box
className={`w-box c9rrarx c3a826z c1wp1mp9 c1boufi4 cyjel2r c1wre12j c7svi18 cxa0lpq ccgujav c2cow57 cugz8nj crk9jw4 c1f5wv5 c1q7npga c1j0y42x cxkd7w7 c45k2m3 c173hpie c1dveily c9iavth c1pzzx7g ctns64h c1qv59gd c18mxjj6 crbdmlv cgr5sm6`}>
<Box
className={`w-box c19vf4mr ckerai1 c15clhgi cixmeh0 c192ae6g c1pczcgv c1ad8d7a c1wre12j c3uwkx5 c18ww0nc`}>
<HtmlEmbed
code={"<!--?xml version=\"1.0\" encoding=\"UTF-8\"?--><svg width=\"32\" height=\"32\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.8533 9.11587C11.3227 13.9521 7.13913 19.5811 6.30256 26.0028C5.00021 35.9999 13.9404 40.8932 18.4703 36.4966C23.0002 32.1 20.2848 26.5195 17.0047 24.9941C13.7246 23.4686 11.7187 23.9999 12.0686 21.9614C12.4185 19.923 17.0851 14.2712 21.1849 11.6391C21.4569 11.4078 21.5604 10.959 21.2985 10.6185C21.1262 10.3946 20.7883 9.95545 20.2848 9.30102C19.8445 8.72875 19.4227 8.75017 18.8533 9.11587Z\" fill=\"#0be3af\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.6789 9.11587C31.1484 13.9521 26.9648 19.5811 26.1282 26.0028C24.8259 35.9999 33.7661 40.8932 38.296 36.4966C42.8259 32.1 40.1105 26.5195 36.8304 24.9941C33.5503 23.4686 31.5443 23.9999 31.8943 21.9614C32.2442 19.923 36.9108 14.2712 41.0106 11.6391C41.2826 11.4078 41.3861 10.959 41.1241 10.6185C40.9519 10.3946 40.614 9.95545 40.1105 9.30102C39.6702 8.72875 39.2484 8.75017 38.6789 9.11587Z\" fill=\"#0be3af\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Text
className={`w-text cg9jk3k c1fhajh8`}>
{"This platform has completely revolutionized how we manage workflows. It’s intuitive, powerful, and secure."}
</Text>
<Box
className={`w-box c1wre12j ccgujav cxa0lpq c3uwkx5 croij3h`}>
<Box
className={`w-box cqdsyx7 cytg9ow c1pruj1h c192nzbd c1asypxa c1lb4xd3 c19cbxyg c4e00g1 crfnq4z c11ntkaz`}>
<Image
src={"/assets/avatar-2_wlMiwY8yKhL4RavLFxKDj.png"}
width={60}
height={60}
className={`w-image`} />
</Box>
<Text
className={`w-text cxqoek0`}>
<Bold
className={`w-bold-text`}>
{"Heitor"}
</Bold>
{", CTO at The Company"}
</Text>
</Box>
</Box>
</Box>
</Box>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box c1n6yfnd c123cnm2`}>
<Box
className={`w-box c1ol7wjx c177vjgx cs1bscr c165pql3 c2fr2xh c1pynuco`}>
<Box
className={`w-box c1klllno cypusvi c1uvv63v caewjba cdk1q4e c19cbxyg c4e00g1 c168a0c2 cocgl01 cg4xqpz c1c8n04t c1dmnoop cio6usq`}>
<Box
className={`w-box c1wre12j c7svi18 c19qdlvg croij3h c1c7caon c1j2ctuz c168a0c2 cjfbq3u cjolq4x cw0qn7o`}>
<Heading
tag={"h2"}
className={`w-heading c1ugtogh c105ypcg c1ug6hox c1kgwakr cc68gnm c1qcqmty ctns64h chr0m95`}>
{"Ready to unlock a new level of productivity?"}
</Heading>
<Text
className={`w-text ccxxvwd cyfmmpz chr0m95`}>
{"Get more done with less effort."}
</Text>
<Button
type={"button"}
className={`w-button c12h1spu c4ctj73 cq4mukj c6iiy3n cnd39nk cpb2v0v c3a826z c1wp1mp9 c1boufi4 cyjel2r cqxsnw5 c1sxv1yc c12kd1bb cu4zxnc c1c1f9dt c1mp6d9l cv7u2xn cbn1j8k ctsm033 c10fig1y c1mwlu3r c8zx3th c1vl04mr cxmc7as c1gk3qsy c1ldlu7o`}>
{"Get started for free"}
</Button>
</Box>
<Box
className={`w-box c12smfnw c1pns0yj c4ctj73 c1pruj1h c192nzbd c1asypxa c1lb4xd3 c9p1ia6 cwdlaet cfn7ku2 ${"elipse-cta"}`} />
<HtmlEmbed
code={"<style>\n\n  @keyframes elipse-cta {\n    0%{\n      transform: translateX(0);\n    } \n    30%{\n      transform: translate(80%, -50%);\n    } \n    60%{\n      transform: translate(-80%, -50%);\n    } \n    100%{\n      transform: translateX(0%);\n    }\n  }\n\n  .elipse-cta {\n    animation: elipse-cta 25s linear infinite;\n  }\n\n</style>"}
className={`w-html-embed`} />
</Box>
</Box>
</Box>
</Box>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<script src=\"https://unpkg.com/lenis@1.1.20/dist/lenis.min.js\"></script> \n\n<script>\n  // Initialize Lenis\n  const lenis = new Lenis({\n    duration: 1.2,\n    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),\n    direction: 'vertical', // vertical, horizontal\n    gestureDirection: 'vertical', // vertical, horizontal, both\n    smooth: true,\n    smoothTouch: false,\n    touchMultiplier: 2,\n    infinite: false,\n  });\n  \n  // Use requestAnimationFrame to continuously update the scroll\n  function raf(time) {\n    lenis.raf(time);\n    requestAnimationFrame(raf);\n  }\n  \n  requestAnimationFrame(raf);\n</script>"}
className={`w-html-embed`} />
<Box
tag={"footer"}
className={`w-box`}>
<Box
className={`w-box c1ol7wjx c177vjgx cs1bscr c165pql3 c2fr2xh c1pynuco`}>
<Box
className={`w-box`}>
<Box
className={`w-box c1wre12j ctfr1b7 cgmjzn6 chqjjxd c16h3tt2 cnbmcn7`}>
<Box
className={`w-box c1wre12j c7svi18`}>
<Image
src={"/assets/logo-flowint_4SnNAkr3bOy66L3zCFRv7.svg"}
width={95}
height={15}
alt={"logo flowint"}
className={`w-image c1h745vm cgffda`} />
<Text
className={`w-text`}>
{"Experience the power of streamlined workflows."}
</Text>
<Box
className={`w-box cgu2mxi c1wre12j c4bofso c1v502xr c1r8w6oc`}>
<Link
href={"#"}
className={`w-link ctgykc2 c9rrarx c1l4flfb c7voop4 cww5kia c1roator c1cebx2 c1wre12j c3uwkx5 c18ww0nc clr6tmk chxqlgk c1ic2y2s cr4w10t c15mksln cqic90c c1ud6pgf crf9a64 c3775vs c79vuff c781qkj cwb3pd c1urudjq cfkm8w8 c7034vz c1h2fv1v c64oihc`}>
<Image
src={"/assets/youtube_ws67BmsRmukHjNwI2k4Tq.svg"}
width={24}
height={24}
alt={"youtube logo"}
className={`w-image`} />
</Link>
<Link
href={"#"}
className={`w-link ctgykc2 c9rrarx c1l4flfb c7voop4 cww5kia c1roator c1cebx2 c1wre12j c3uwkx5 c18ww0nc clr6tmk chxqlgk c1ic2y2s cr4w10t c15mksln cqic90c c1ud6pgf crf9a64 c3775vs c79vuff c781qkj cwb3pd c1urudjq cfkm8w8 c7034vz c1h2fv1v c64oihc`}>
<Image
src={"/assets/linkedin_aOpk4GY3LkUveK_AoXyqP.svg"}
width={24}
height={24}
alt={"linkedin logo"}
className={`w-image`} />
</Link>
<Link
href={"#"}
className={`w-link ctgykc2 c9rrarx c1l4flfb c7voop4 cww5kia c1roator c1cebx2 c1wre12j c3uwkx5 c18ww0nc clr6tmk chxqlgk c1ic2y2s cr4w10t c15mksln cqic90c c1ud6pgf crf9a64 c3775vs c79vuff c781qkj cwb3pd c1urudjq cfkm8w8 c7034vz c1h2fv1v c64oihc`}>
<Image
src={"/assets/x_Kw7FkbIQk4RIgBvxLpmI5.svg"}
width={26}
height={24}
alt={"x logo"}
className={`w-image`} />
</Link>
<Link
href={"#"}
className={`w-link ctgykc2 c9rrarx c1l4flfb c7voop4 cww5kia c1roator c1cebx2 c1wre12j c3uwkx5 c18ww0nc clr6tmk chxqlgk c1ic2y2s cr4w10t c15mksln cqic90c c1ud6pgf crf9a64 c3775vs c79vuff c781qkj cwb3pd c1urudjq cfkm8w8 c7034vz c1h2fv1v c64oihc`}>
<Image
src={"/assets/github_i8PPKF9BnEWYzw0bVErYq.svg"}
width={24}
height={24}
alt={"github logo"}
className={`w-image`} />
</Link>
</Box>
</Box>
<Box
className={`w-box c1wre12j cfrxpua c1a6x4l1 cnbmcn7 c16h3tt2`}>
<Box
className={`w-box c1wre12j c7svi18 c1v502xr c4bofso`}>
<Link
className={`w-link czxtlv3 cqxsnw5 cs190iw c5s04m8 c1mp6d9l cv7u2xn cbn1j8k cnptxav ckf012t`}>
<Text
className={`w-text`}>
{"Pricing"}
</Text>
</Link>
<Link
className={`w-link czxtlv3 cqxsnw5 cs190iw c5s04m8 c1mp6d9l cv7u2xn cbn1j8k cnptxav ckf012t`}>
<Text
className={`w-text`}>
{"Enterprise"}
</Text>
</Link>
<Link
className={`w-link czxtlv3 cqxsnw5 cs190iw c5s04m8 c1mp6d9l cv7u2xn cbn1j8k cnptxav ckf012t`}>
<Text
className={`w-text`}>
{"Use cases"}
</Text>
</Link>
<Link
className={`w-link czxtlv3 cqxsnw5 cs190iw c5s04m8 c1mp6d9l cv7u2xn cbn1j8k cnptxav ckf012t`}>
<Text
className={`w-text`}>
{"Product"}
</Text>
</Link>
<Link
className={`w-link czxtlv3 cqxsnw5 cs190iw c5s04m8 c1mp6d9l cv7u2xn cbn1j8k cnptxav ckf012t`}>
<Text
className={`w-text`}>
{"Contact"}
</Text>
</Link>
</Box>
<Box
className={`w-box c1wre12j c7svi18 c1v502xr c4bofso`}>
<Link
className={`w-link czxtlv3 cqxsnw5 cs190iw c5s04m8 c1mp6d9l cv7u2xn cbn1j8k cnptxav ckf012t`}>
<Text
className={`w-text`}>
{"Community"}
</Text>
</Link>
<Link
className={`w-link czxtlv3 cqxsnw5 cs190iw c5s04m8 c1mp6d9l cv7u2xn cbn1j8k cnptxav ckf012t`}>
<Text
className={`w-text`}>
{"Blog"}
</Text>
</Link>
<Link
className={`w-link czxtlv3 cqxsnw5 cs190iw c5s04m8 c1mp6d9l cv7u2xn cbn1j8k cnptxav ckf012t`}>
<Text
className={`w-text`}>
{"Docs"}
</Text>
</Link>
<Link
className={`w-link czxtlv3 cqxsnw5 cs190iw c5s04m8 c1mp6d9l cv7u2xn cbn1j8k cnptxav ckf012t`}>
<Text
className={`w-text`}>
{"Help center"}
</Text>
</Link>
<Link
className={`w-link czxtlv3 cqxsnw5 cs190iw c5s04m8 c1mp6d9l cv7u2xn cbn1j8k cnptxav ckf012t`}>
<Text
className={`w-text`}>
{"Events"}
</Text>
</Link>
</Box>
</Box>
</Box>
<Box
className={`w-box c1wre12j c1srpweh cugz8nj c1j0y42x cx4ild2 ctfr1b7 cpex75p c1x80dtd cqmgm49 chqjjxd c1xtowow c1an5f22`}>
<Box
className={`w-box`}>
<Text
className={`w-text`}>
{"©2025 Flowint Template. All rights reserved"}
</Text>
</Box>
<Box
className={`w-box c1wre12j c1eouu86 clcytnx c1yacw5f c1py5wt3 c4p3vok`}>
<Text
className={`w-text`}>
{"By "}
<RichTextLink
href={"https://itsivan.works/"}
target={"_blank"}
className={`w-rich-text-link czxtlv3 cqxsnw5 cs190iw c5s04m8 c1mp6d9l cv7u2xn cbn1j8k cnptxav ckf012t`}>
{"ItsIvan Works"}
</RichTextLink>
</Text>
<Text
className={`w-text`}>
{"Powered by It's Ivan"}
</Text>
</Box>
</Box>
</Box>
</Box>
</Box>
</Fragment_1>
</Slot>
</Box>
<a
href={"https://webstudio.is/?via=badge"}
target={"_blank"}
className={`cj5sz98 c15n3vgk c1qq3k23 c3uwkx5 c18ww0nc c1k21cms c1tcn6m9 c12u1ixd crjjrj2 cjpkcwt c1a2q8c3 cdfkwjn c1idsgxj c1pzdmqh c1qndxyv c105db3m c1ewm8gh cj5l4mp clrpjho c2dfrl3 c1ay7ata ce7r6uz cqxsnw5 c7ojujn c1btjbc3 c1qbvg5o cqy16b1 cem3g4i`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"m12.32 12.416 2.62-8.085a1.205 1.205 0 1 0-2.292-.746l-2.62 8.084a1.205 1.205 0 1 0 2.292.747Z\" clip-rule=\"evenodd\"/><path fill-rule=\"evenodd\" d=\"M8 7.624c.297 0 .517.175.704.394.207.243.373.545.514.866.634 1.44.753 3.241.753 3.241a1.206 1.206 0 0 0 1.285 1.122 1.207 1.207 0 0 0 1.12-1.287s-.16-2.25-.952-4.05C10.744 6.364 9.594 5.208 8 5.208c-1.594 0-2.744 1.156-3.424 2.7-.792 1.8-.951 4.05-.951 4.05a1.207 1.207 0 0 0 1.12 1.288 1.206 1.206 0 0 0 1.284-1.122s.119-1.8.753-3.24a3.52 3.52 0 0 1 .514-.867c.187-.22.406-.394.704-.394Z\" clip-rule=\"evenodd\"/><path fill-rule=\"evenodd\" d=\"M5.973 11.669 3.352 3.585a1.205 1.205 0 1 0-2.293.746l2.622 8.084a1.205 1.205 0 1 0 2.292-.746Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed c1au6s20 c1iiacpt c17rdxi7 c11ntkaz`} />
<div>
{"Built with Webstudio"}
</div>
</a>
</Body>
}


      export { Page }
    