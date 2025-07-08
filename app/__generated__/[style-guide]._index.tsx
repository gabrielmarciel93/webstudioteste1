/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Box as Box, Image as Image, Heading as Heading, Text as Text, Paragraph as Paragraph, Span as Span, Blockquote as Blockquote, List as List, ListItem as ListItem, Separator as Separator, CodeText as CodeText, Bold as Bold, Slot as Slot, Button as Button } from "@webstudio-is/sdk-components-react";
import { Link as Link, Body as Body, RichTextLink as RichTextLink } from "@webstudio-is/sdk-components-react-router";
import { NavigationMenu as NavigationMenu, NavigationMenuList as NavigationMenuList, NavigationMenuItem as NavigationMenuItem, NavigationMenuLink as NavigationMenuLink, Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose, NavigationMenuViewport as NavigationMenuViewport } from "@webstudio-is/sdk-components-react-radix";


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

      

      const Page = (_props: { system: any; }) => {
return <Body
id={"top"}
className={`w-body`}>
<Box
className={`w-box c1n6yfnd c123cnm2`}>
<Box
className={`w-box c1ol7wjx c177vjgx cs1bscr c165pql3 c2fr2xh c1pynuco c1wre12j c7svi18 c1unzx1b cjvar9n`}>
<Box
className={`w-box c1wre12j c7svi18 c1r3dpcg cefy7rw cgu2mxi`}>
<Heading
className={`w-heading c13ohqf1 c105ypcg c1ug6hox c1kgwakr cxzg5y8 cejwv8 ccyn7r9`}>
{"Style Guide"}
</Heading>
<Text
className={`w-text ccxxvwd c1vw51mt`}>
{"Craft Version 1.0"}
</Text>
<Paragraph
className={`w-paragraph cblp0kz ccxxvwd`}>
{"Here is the community style guide according to "}
<RichTextLink
href={"https://docs.webstudio.is/university/craft"}
target={"_blank"}
className={`w-rich-text-link cabtt57 czetmk3 c10fig1y c1mwlu3r`}>
{"Craft"}
</RichTextLink>
{", the recommended starting point for Webstudio Projects. "}
<RichTextLink
href={"https://docs.webstudio.is/university/foundations/css-variables"}
target={"_blank"}
className={`w-rich-text-link cabtt57 czetmk3 c10fig1y c1mwlu3r`}>
{"CSS variables"}
</RichTextLink>
{" containing colors, sizes, and more are on the Global Root. "}
</Paragraph>
</Box>
<Box
id={"layout"}
className={`w-box c1wre12j c7svi18 c2nc3wz c1aepziv cda5kbm`}>
<Box
className={`w-box c1wre12j c7svi18 c1r3dpcg cefy7rw cgu2mxi`}>
<Heading
tag={"h2"}
className={`w-heading c1ugtogh c105ypcg c1ug6hox c1kgwakr cxzg5y8`}>
{"Layout"}
</Heading>
</Box>
<Box
className={`w-box ctw5yoj c1be6d22 c12f3vp8 cy48pge c5idmel`}>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c3uwkx5 c18ww0nc c1n6yfnd c123cnm2 c1fp2888 cjqbw64 c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ic5yw7`}>
<Text
className={`w-text cfima41 c4n56el ce701e7 c1cz53mr c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7`}>
{"section"}
</Text>
</Box>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c3uwkx5 c18ww0nc c52vgd0 c1yrcjcr c165pql3 cs1bscr c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ol7wjx c177vjgx c2fr2xh c1pynuco c1ic5yw7`}>
<Text
className={`w-text cfima41 c4n56el ce701e7 c1cz53mr c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7`}>
{"container"}
</Text>
</Box>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m ctw5yoj c3uwkx5 c18ww0nc c118ji7k c11ntkaz c7svi18 ccgujav ccfu3nu c137at41 c1ic5yw7 c13pjzaa c12tm2jm chqjjxd c10al51t chwj9lu c6j03fk c1ue1l8o`}>
<Box
className={`w-box co4ior2 c1nplbav`}>
<Text
className={`w-text cfima41 c1vmkwjh c1v7yszz c4n56el ce701e7 cai1sw1 cpsdb8a c1p8keq5 c1l4flfb c7voop4 cww5kia c1roator crfnq4z c11ntkaz`}>
{"grid"}
</Text>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Grid quickly provides the properties to create a grid. Once added, switch over to Local and type in your template columns."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Note, grid turns into flex on 767. This is because grid children may use start/end columns and would require us to reset each one manually on mobile. By setting the parent to flex, those values are ignored."}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
<Box
id={"colors"}
className={`w-box c1wre12j c7svi18 c2nc3wz c1aepziv cda5kbm`}>
<Box
className={`w-box c1wre12j c7svi18 c1r3dpcg cefy7rw cgu2mxi`}>
<Heading
tag={"h2"}
className={`w-heading c1ugtogh c105ypcg c1ug6hox c1kgwakr cxzg5y8`}>
{"Colors"}
</Heading>
<Paragraph
className={`w-paragraph c1vw51mt c1lntxs8`}>
{"Change these values on the Global Root. It's best practice to map semantic variables such as "}
<Span
className={`w-text-1 cde8eet c1yljiuc c1p0atl2 c1waj8rw c1gwxdrh czuxlmf cqojbt4 c13vucu2`}>
{"--foreground-primary"}
</Span>
{" to another variable such as "}
<Span
className={`w-text-1 cde8eet c1yljiuc c1p0atl2 c1waj8rw c1gwxdrh czuxlmf cqojbt4 c13vucu2`}>
{"--gray-10"}
</Span>
{"."}
</Paragraph>
</Box>
<Heading
tag={"h3"}
className={`w-heading cuhj26k c105ypcg c1ug6hox c1kgwakr cxzg5y8`}>
{"Foreground"}
</Heading>
<Box
className={`w-box ctw5yoj c137at41 c12f3vp8 cy48pge c5idmel`}>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c3uwkx5 c18ww0nc c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ic5yw7 c13pjzaa`}>
<Text
className={`w-text c17zjp8j c4n56el ce701e7 cqrlflv c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7 cihcxc7`}>
{"--foreground-primary"}
</Text>
<Box
className={`w-box c80fxie co44pz5 c1dntr8u c1ultc7k c1n4b3jv ce2rdnw c13xrhd c12h1spu c1gklj3a`} />
</Box>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c3uwkx5 c18ww0nc c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ic5yw7 c13pjzaa`}>
<Text
className={`w-text c17zjp8j c4n56el ce701e7 cqrlflv c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7 cihcxc7`}>
{"--foreground-secondary"}
</Text>
<Box
className={`w-box c80fxie co44pz5 c1dntr8u c1ultc7k c1n4b3jv ce2rdnw c13xrhd c1ajkd3 c1ic5yw7`} />
</Box>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c3uwkx5 c18ww0nc c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ic5yw7 c13pjzaa`}>
<Text
className={`w-text c17zjp8j c4n56el ce701e7 cqrlflv c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7 cihcxc7`}>
{"--foreground-accent"}
</Text>
<Box
className={`w-box c80fxie co44pz5 c1dntr8u c1ultc7k c1n4b3jv ce2rdnw c13xrhd c1tz86cd c1gklj3a`} />
</Box>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c3uwkx5 c18ww0nc c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ic5yw7 c13pjzaa`}>
<Text
className={`w-text c17zjp8j c4n56el ce701e7 cqrlflv c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7 cihcxc7`}>
{"--foreground-muted"}
</Text>
<Box
className={`w-box c80fxie co44pz5 c1dntr8u c1ultc7k c1n4b3jv ce2rdnw c13xrhd cbmvciw c1gklj3a`} />
</Box>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c3uwkx5 c18ww0nc c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ic5yw7 c13pjzaa`}>
<Text
className={`w-text c17zjp8j c4n56el ce701e7 cqrlflv c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7 cihcxc7`}>
{"--foreground-border"}
</Text>
<Box
className={`w-box c80fxie co44pz5 c1dntr8u c1ultc7k c1n4b3jv ce2rdnw c13xrhd c1v546cn c1gklj3a`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading cuhj26k c105ypcg c1ug6hox c1kgwakr cxzg5y8`}>
{"Background"}
</Heading>
<Box
className={`w-box ctw5yoj c137at41 c12f3vp8 cy48pge c5idmel`}>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c3uwkx5 c18ww0nc c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ic5yw7 c13pjzaa`}>
<Text
className={`w-text c17zjp8j c4n56el ce701e7 cqrlflv c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7 cihcxc7`}>
{"--background-primary"}
</Text>
<Box
className={`w-box c80fxie co44pz5 c1dntr8u c1ultc7k c1n4b3jv ce2rdnw c13xrhd c1v5yat2 c1ic5yw7`} />
</Box>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c3uwkx5 c18ww0nc c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ic5yw7 c13pjzaa`}>
<Text
className={`w-text c17zjp8j c4n56el ce701e7 cqrlflv c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7 cihcxc7`}>
{"--background-secondary"}
</Text>
<Box
className={`w-box c80fxie co44pz5 c1dntr8u c1ultc7k c1n4b3jv ce2rdnw c13xrhd c1wkl7yp c1gklj3a`} />
</Box>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c3uwkx5 c18ww0nc c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ic5yw7 c13pjzaa`}>
<Text
className={`w-text c17zjp8j c4n56el ce701e7 cqrlflv c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7 cihcxc7`}>
{"--background-accent"}
</Text>
<Box
className={`w-box c80fxie co44pz5 c1dntr8u c1ultc7k c1n4b3jv ce2rdnw c13xrhd ca0paxm c1gklj3a`} />
</Box>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c3uwkx5 c18ww0nc c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ic5yw7 c13pjzaa`}>
<Text
className={`w-text c17zjp8j c4n56el ce701e7 cqrlflv c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7 cihcxc7`}>
{"--background-card"}
</Text>
<Box
className={`w-box c80fxie co44pz5 c1dntr8u c1ultc7k c1n4b3jv ce2rdnw c13xrhd c45f0d1 c1gklj3a`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading cuhj26k c105ypcg c1ug6hox c1kgwakr cxzg5y8`}>
{"Other"}
</Heading>
<Box
className={`w-box ctw5yoj c137at41 c12f3vp8 cy48pge c5idmel`}>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c3uwkx5 c18ww0nc c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ic5yw7 c13pjzaa`}>
<Text
className={`w-text c17zjp8j c4n56el ce701e7 cqrlflv c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7 cihcxc7`}>
{"--focus-color"}
</Text>
<Box
className={`w-box c80fxie co44pz5 c1dntr8u c1ultc7k c1n4b3jv ce2rdnw c13xrhd c1rt3tjb c1gklj3a`} />
</Box>
</Box>
</Box>
<Box
id={"links-buttons"}
className={`w-box c1wre12j c7svi18 c2nc3wz c1aepziv cda5kbm`}>
<Box
className={`w-box c1wre12j c7svi18 c1r3dpcg cefy7rw cgu2mxi`}>
<Heading
tag={"h2"}
className={`w-heading c1ugtogh c105ypcg c1ug6hox c1kgwakr cxzg5y8`}>
{"Buttons and Links"}
</Heading>
</Box>
<Box
className={`w-box ctw5yoj c137at41 c12f3vp8 cy48pge c5idmel`}>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c19qdlvg croij3h c118ji7k c11ntkaz c7svi18 c4bofso c1v502xr c1ic5yw7 c13pjzaa`}>
<Text
className={`w-text cfima41 c4n56el ce701e7 c1cz53mr c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7`}>
{"button-group"}
</Text>
<Box
className={`w-box c1wre12j c3uwkx5 croij3h c16almvz c15vk9n c1jxwkzq`}>
<Link
className={`w-link c12h1spu c4ctj73 cq4mukj c6iiy3n cnd39nk cpb2v0v c3a826z c1wp1mp9 c1boufi4 cyjel2r cqxsnw5 c1sxv1yc c12kd1bb cu4zxnc c1c1f9dt c1mp6d9l cv7u2xn cbn1j8k ctsm033 c10fig1y c1mwlu3r c8zx3th c1vl04mr cxmc7as c1gk3qsy c1ldlu7o`}>
{"button"}
</Link>
<Link
className={`w-link c1bhksu9 c9ylq2r cq4mukj c6iiy3n cnd39nk cpb2v0v c3a826z c1wp1mp9 c1boufi4 cyjel2r cqxsnw5 c1sxv1yc c12kd1bb cu4zxnc c1c1f9dt c1mp6d9l cv7u2xn cbn1j8k ctsm033 c10fig1y c1mwlu3r c8zx3th c1vl04mr cxmc7as c1gk3qsy c1ldlu7o`}>
{"is-button-secondary"}
</Link>
</Box>
</Box>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c19qdlvg croij3h c118ji7k c11ntkaz c7svi18 c4bofso c1v502xr c1ic5yw7 c13pjzaa`}>
<Text
className={`w-text cfima41 c4n56el ce701e7 c1cz53mr c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7`}>
{"link"}
</Text>
<Link
className={`w-link cabtt57 czetmk3 c10fig1y c1mwlu3r`}>
{"Link text you can edit"}
</Link>
</Box>
</Box>
</Box>
<Box
id={"elements"}
className={`w-box c1wre12j c7svi18 c2nc3wz c1aepziv cda5kbm`}>
<Box
className={`w-box c1wre12j c7svi18 c1r3dpcg cefy7rw cgu2mxi`}>
<Heading
tag={"h2"}
className={`w-heading c1ugtogh c105ypcg c1ug6hox c1kgwakr cxzg5y8`}>
{"Elements"}
</Heading>
</Box>
<Box
className={`w-box c1wre12j c7svi18 c1r3dpcg cefy7rw`}>
<Text
className={`w-text cfima41 c4n56el ce701e7 c1cz53mr c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7`}>
{"heading-1|2|3|4|5|6"}
</Text>
<Heading
className={`w-heading c13ohqf1 c105ypcg c1ug6hox c1kgwakr cxzg5y8 cejwv8 ccyn7r9`}>
{"Heading 1 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1ugtogh c105ypcg c1ug6hox c1kgwakr cxzg5y8`}>
{"Heading 2 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading cuhj26k c105ypcg c1ug6hox c1kgwakr cxzg5y8`}>
{"Heading 3 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading ceedd2 c105ypcg c1ug6hox c1kgwakr cxzg5y8 c32c1ro`}>
{"Heading 4 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1xymqwy c105ypcg c1ug6hox c1kgwakr`}>
{"Heading 5 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1xymqwy c105ypcg c1ug6hox c1kgwakr`}>
{"Heading 6 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Paragraph "}
<RichTextLink
className={`w-rich-text-link cabtt57 czetmk3 c10fig1y c1mwlu3r`}>
{"text you"}
</RichTextLink>
{" can edit"}
{""}
<br />
{""}
{"that spans multiple lines"}
</Paragraph>
<Blockquote
className={`w-blockquote c1kgwakr c121x8zx c1d7c81v c1ssb0g5 c6tzyf0`}>
<Span
className={`w-text-1 cfima41 c4n56el ce701e7 c1cz53mr c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7`}>
{"blockquote"}
</Span>
{" text you can edit"}
</Blockquote>
<Text
className={`w-text cfima41 c4n56el ce701e7 c1cz53mr c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7`}>
{"list"}
</Text>
<List
className={`w-list c1kgwakr`}>
<ListItem
className={`w-list-item`}>
<Span
className={`w-text-1 cfima41 c4n56el ce701e7 c1cz53mr c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7`}>
{"list-item"}
</Span>
{" text you can edit"}
</ListItem>
<ListItem
className={`w-list-item`}>
{"List Item text you can edit"}
</ListItem>
<ListItem
className={`w-list-item`}>
{"List Item text you can edit"}
</ListItem>
</List>
<Text
className={`w-text cfima41 c4n56el ce701e7 c1cz53mr c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7`}>
{"separator"}
</Text>
<Separator
className={`w-separator co2fk3q c2fr2xh c1ug6hox c1kgwakr`} />
<Text
className={`w-text cfima41 c4n56el ce701e7 c1cz53mr c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7`}>
{"code"}
</Text>
<CodeText
code={"console.log(\"Hello World\");"}
lang={""}
className={`w-code-text cde8eet c1yljiuc c1p0atl2 c1waj8rw c1gwxdrh czuxlmf cqojbt4 c13vucu2`} />
</Box>
</Box>
<Box
id={"forms"}
className={`w-box c1wre12j c7svi18 c2nc3wz c1aepziv cda5kbm`}>
<Box
className={`w-box c1wre12j c7svi18 c1r3dpcg cefy7rw cgu2mxi`}>
<Heading
tag={"h2"}
className={`w-heading c1ugtogh c105ypcg c1ug6hox c1kgwakr cxzg5y8`}>
{"Forms"}
</Heading>
</Box>
<Box
className={`w-box ctw5yoj c137at41 c12f3vp8 cy48pge c5idmel`}>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c3uwkx5 c18ww0nc c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ic5yw7 c13pjzaa`}>
<Text
className={`w-text cfima41 c4n56el ce701e7 c1cz53mr c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"radix"}
className={`w-box c1wre12j c7svi18 c2nc3wz c1aepziv cda5kbm`}>
<Box
className={`w-box c1wre12j c7svi18 c1r3dpcg cefy7rw cgu2mxi`}>
<Heading
tag={"h2"}
className={`w-heading c1ugtogh c105ypcg c1ug6hox c1kgwakr cxzg5y8`}>
{"Radix"}
</Heading>
</Box>
<Box
className={`w-box ctw5yoj c137at41 c12f3vp8 cy48pge c5idmel`}>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c3uwkx5 c18ww0nc c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ic5yw7 c13pjzaa`}>
<Text
className={`w-text cfima41 c4n56el ce701e7 c1cz53mr c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"utility"}
className={`w-box c1wre12j c7svi18 c2nc3wz c1aepziv cda5kbm`}>
<Box
className={`w-box c1wre12j c7svi18 c1r3dpcg cefy7rw cgu2mxi`}>
<Heading
tag={"h2"}
className={`w-heading c1ugtogh c105ypcg c1ug6hox c1kgwakr cxzg5y8`}>
{"Utility"}
</Heading>
</Box>
<Box
className={`w-box ctw5yoj c137at41 c12f3vp8 cy48pge c5idmel`}>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c3uwkx5 c18ww0nc c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ic5yw7 c13pjzaa`}>
<Text
className={`w-text cfima41 c4n56el ce701e7 c1cz53mr c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"slots"}
className={`w-box c1wre12j c7svi18 c2nc3wz c1aepziv cda5kbm`}>
<Box
className={`w-box c1wre12j c7svi18 c1r3dpcg cefy7rw cgu2mxi`}>
<Heading
tag={"h2"}
className={`w-heading c1ugtogh c105ypcg c1ug6hox c1kgwakr cxzg5y8`}>
{"Slots"}
</Heading>
</Box>
<Box
className={`w-box ctw5yoj c137at41 c12f3vp8 cy48pge c5idmel`}>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c3uwkx5 c18ww0nc c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ic5yw7 c13pjzaa`}>
<Text
className={`w-text cfima41 c4n56el ce701e7 c1cz53mr c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7`}>
{"my-slot"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"custom"}
className={`w-box c1wre12j c7svi18 c2nc3wz c1aepziv cda5kbm`}>
<Box
className={`w-box c1wre12j c7svi18 c1r3dpcg cefy7rw cgu2mxi`}>
<Heading
tag={"h2"}
className={`w-heading c1ugtogh c105ypcg c1ug6hox c1kgwakr cxzg5y8`}>
{"Custom"}
</Heading>
</Box>
<Box
className={`w-box ctw5yoj c137at41 c12f3vp8 cy48pge c5idmel`}>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c3uwkx5 c18ww0nc c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ic5yw7 c13pjzaa`}>
<Text
className={`w-text cfima41 c4n56el ce701e7 c1cz53mr c1p8keq5 c1nuhymn cdcv469 c1x9patp c5mj6be c1y8o1y7`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"notes"}
className={`w-box c1wre12j c7svi18 c2nc3wz c1aepziv cda5kbm`}>
<Box
className={`w-box c1wre12j c7svi18 c1r3dpcg cefy7rw cgu2mxi`}>
<Heading
tag={"h2"}
className={`w-heading c1ugtogh c105ypcg c1ug6hox c1kgwakr cxzg5y8`}>
{"Notes"}
</Heading>
<Paragraph
className={`w-paragraph c1vw51mt c1lntxs8`}>
{"Add notes for yourself or other creators that explain any nuances of the build."}
</Paragraph>
</Box>
<Box
className={`w-box ctw5yoj c137at41 c12f3vp8 cy48pge c5idmel`}>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c3uwkx5 c18ww0nc c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ic5yw7 c13pjzaa`}>
<Paragraph
className={`w-paragraph`}>
{"These are global CSS variables added in addition to Open Props."}
</Paragraph>
<CodeText
code={"--foreground-primary\n--foreground-secondary\n--foreground-accent\n--foreground-muted\n--foreground-border\n\n--background-primary\n--background-secondary\n--background-accent\n--background-card\n\n--gap-xs\n--gap-s\n--gap-m\n--gap-l\n\n--focus-color\n--focus-width\n--focus-offset\n\n--duration-default\n--easing-default"}
className={`w-code-text cde8eet c1yljiuc c1p0atl2 c1waj8rw cqojbt4 c2fr2xh c13vucu2 cuckafj`} />
</Box>
<Box
className={`w-box cvxedyg c1jgs2to c19fdr6a c1lyb5m c1wre12j c19qdlvg croij3h c118ji7k c11ntkaz c7svi18 chwsqls ccfu3nu c1ic5yw7 c13pjzaa`}>
<Paragraph
className={`w-paragraph`}>
<Bold
className={`w-bold-text`}>
{"Want to start with a light theme?"}
</Bold>
</Paragraph>
<Paragraph
className={`w-paragraph`}>
{"Click "}
<Span
className={`w-text-1 cde8eet c1yljiuc c1p0atl2 c1waj8rw c1gwxdrh czuxlmf cqojbt4 c13vucu2`}>
{"+"}
</Span>
{" in Advanced on the Global Root and paste in the following:"}
</Paragraph>
<CodeText
code={"--foreground-primary: var(--gray-10);\n--foreground-muted: var(--gray-7);\n--background-primary: var(--gray-0);\n--background-secondary: var(--gray-3);\n--background-accent: var(--gray-10);"}
className={`w-code-text cde8eet c1yljiuc c1p0atl2 c1waj8rw cqojbt4 c2fr2xh c13vucu2 cuckafj`} />
</Box>
</Box>
</Box>
</Box>
<Box
tag={"nav"}
className={`w-box c1wckexh ctzxjxs c1k21cms c1oejzxd cshmfxu c8o9qah cqrdt7y cqojbt4 cwm5l33 czxxy58`}>
<Box
className={`w-box c1ol7wjx c177vjgx cs1bscr c165pql3 c2fr2xh c1pynuco c1wre12j ctfr1b7 c1r3dpcg cefy7rw c1q7hjyu`}>
<Link
className={`w-link cabtt57 czetmk3 c10fig1y c1mwlu3r`}>
{"Layout"}
</Link>
<Link
className={`w-link cabtt57 czetmk3 c10fig1y c1mwlu3r`}>
{"Colors"}
</Link>
<Link
className={`w-link cabtt57 czetmk3 c10fig1y c1mwlu3r`}>
{"Links & Buttons"}
</Link>
<Link
className={`w-link cabtt57 czetmk3 c10fig1y c1mwlu3r`}>
{"Elements"}
</Link>
<Link
className={`w-link cabtt57 czetmk3 c10fig1y c1mwlu3r`}>
{"Forms"}
</Link>
<Link
className={`w-link cabtt57 czetmk3 c10fig1y c1mwlu3r`}>
{"Radix"}
</Link>
<Link
className={`w-link cabtt57 czetmk3 c10fig1y c1mwlu3r`}>
{"Utility"}
</Link>
<Link
className={`w-link cabtt57 czetmk3 c10fig1y c1mwlu3r`}>
{"Slots"}
</Link>
<Link
className={`w-link cabtt57 czetmk3 c10fig1y c1mwlu3r`}>
{"Custom"}
</Link>
<Link
className={`w-link cabtt57 czetmk3 c10fig1y c1mwlu3r`}>
{"Notes"}
</Link>
</Box>
</Box>
</Box>
<Box
className={`w-box c1ol7wjx c177vjgx cs1bscr c165pql3 c2fr2xh c1pynuco c1n6yfnd c123cnm2 c1wre12j c7svi18 c3uwkx5 c18ww0nc c16almvz c15vk9n`}>
<Heading
tag={"h2"}
className={`w-heading c1ugtogh c105ypcg c1ug6hox c1kgwakr ceyckim`}>
{"👇Template for new pages👇"}
</Heading>
<Paragraph
className={`w-paragraph c1lntxs8 c1p8keq5 cbmvciw`}>
{"When creating a new page, you can copy the \"Page Wrapper\" instance below (see navigator) and paste it on the new page. It contains the skeleton of a page, including a nav, footer, and section."}
</Paragraph>
</Box>
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
className={`w-box c1n6yfnd c123cnm2`}>
<Box
className={`w-box c1ol7wjx c177vjgx cs1bscr c165pql3 c2fr2xh c1pynuco`} />
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
</Body>
}


      export { Page }
    