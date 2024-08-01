import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/notvictorl/",
      LinkedIn: "https://linkin.com/in/victorliu2",
      Email: "mailto:victorliu2@protonmail.com",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Notes",
        limit: 3,
        filter: (f) =>
          (f.slug!.startsWith("fpga/") && f.slug! !== "fpga/index" && !f.frontmatter?.noindex) ||
          (f.slug!.startsWith("projects/") && f.slug! !== "projects/index" && !f.frontmatter?.noindex),
      }),
    ),
    Component.DesktopOnly(
      Component.Explorer({
        title: "Explorer", // title of the explorer component
        folderClickBehavior: "link", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
        folderDefaultState: "open", // default state of folders ("collapsed" or "open")
      })
    ),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      title: "Explorer", // title of the explorer component
      folderClickBehavior: "link", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
      folderDefaultState: "open", // default state of folders ("collapsed" or "open")
    })),
  ],
  right: [],
}