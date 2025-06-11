import { useState } from 'react';
import {
  Avatar,
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonVariant,
  Content,
  Divider,
  Dropdown,
  DropdownGroup,
  DropdownItem,
  DropdownList,
  Masthead,
  MastheadMain,
  MastheadLogo,
  MastheadContent,
  MastheadBrand,
  MastheadToggle,
  MenuToggle,
  Nav,
  NavItem,
  NavList,
  NavExpandable,
  NotificationBadge,
  NotificationBadgeVariant,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  PageToggleButton,
  SkipToContent,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { BrowserRouter, Routes, Route, NavLink, useLocation, useNavigate, matchPath, Navigate } from 'react-router-dom';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import pfLogo from '@patternfly/react-core/src/demos/assets/PF-HorizontalLogo-Color.svg';
import Dashboard from './pages/Dashboard';
import Instances from './pages/Instances';
import Settings from './pages/Settings';
import Documentation from './pages/Documentation';

// Add this at the top of the file for TypeScript SVG import support:
// If vite-env.d.ts does not exist, create it with: declare module '*.svg';

// Breadcrumbs config
const breadcrumbMap: Record<string, Array<{ path: string; label: string }>> = {
  '/system/dashboard': [
    { path: '/system/dashboard', label: 'System' },
    { path: '/system/dashboard', label: 'Dashboard' }
  ],
  '/system/instances': [
    { path: '/system/dashboard', label: 'System' },
    { path: '/system/instances', label: 'Instances' }
  ],
  '/settings': [
    { path: '/settings', label: 'Settings' }
  ],
  '/docs': [
    { path: '/docs', label: 'Documentation' }
  ]
};

function AppLayout() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = useState(false);
  const [isFullKebabDropdownOpen, setIsFullKebabDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Only show breadcrumbs for nested pages (not top-level nav)
  const showBreadcrumbs = location.pathname.startsWith('/system/');

  // Find the best matching breadcrumb config for the current path
  const getBreadcrumbs = () => {
    const path = location.pathname;
    const match = Object.keys(breadcrumbMap).find((pattern) => matchPath(pattern, path));
    if (match) {
      return breadcrumbMap[match];
    }
    return [];
  };

  const breadcrumbs = (
    <Breadcrumb>
      {getBreadcrumbs().map((crumb, idx, arr) => (
        <BreadcrumbItem
          key={crumb.path}
          to={idx < arr.length - 1 ? crumb.path : undefined}
          isActive={idx === arr.length - 1}
          onClick={idx < arr.length - 1 ? (e) => { e.preventDefault(); navigate(crumb.path); } : undefined}
        >
          {crumb.label}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );

  const kebabDropdownItems = (
    <>
      <DropdownItem>
        <CogIcon /> Settings
      </DropdownItem>
      <DropdownItem>
        <HelpIcon /> Help
      </DropdownItem>
    </>
  );
  const userDropdownItems = (
    <>
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user">User management</DropdownItem>
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    </>
  );

  const headerToolbar = (
    <Toolbar id="toolbar" isStatic>
      <ToolbarContent>
        <ToolbarGroup
          variant="action-group-plain"
          align={{ default: 'alignEnd' }}
          gap={{ default: 'gapNone', md: 'gapMd' }}
        >
          <ToolbarItem>
            <NotificationBadge aria-label="Notifications" variant={NotificationBadgeVariant.read} onClick={() => {}} />
          </ToolbarItem>
          <ToolbarGroup variant="action-group-plain" visibility={{ default: 'hidden', lg: 'visible' }}>
            <ToolbarItem>
              <Button aria-label="Settings" variant={ButtonVariant.plain} icon={<CogIcon />} />
            </ToolbarItem>
            <ToolbarItem>
              <Button aria-label="Help" variant={ButtonVariant.plain} icon={<QuestionCircleIcon />} />
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarItem visibility={{ default: 'hidden', md: 'visible', lg: 'hidden' }}>
            <Dropdown
              isOpen={isKebabDropdownOpen}
              onSelect={() => setIsKebabDropdownOpen(false)}
              onOpenChange={setIsKebabDropdownOpen}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef) => (
                <MenuToggle
                  ref={toggleRef}
                  onClick={() => setIsKebabDropdownOpen(!isKebabDropdownOpen)}
                  isExpanded={isKebabDropdownOpen}
                  variant="plain"
                  aria-label="Settings and help"
                  icon={<EllipsisVIcon />}
                />
              )}
            >
              <DropdownList>{kebabDropdownItems}</DropdownList>
            </Dropdown>
          </ToolbarItem>
          <ToolbarItem visibility={{ md: 'hidden' }}>
            <Dropdown
              isOpen={isFullKebabDropdownOpen}
              onSelect={() => setIsFullKebabDropdownOpen(false)}
              onOpenChange={setIsFullKebabDropdownOpen}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef) => (
                <MenuToggle
                  ref={toggleRef}
                  onClick={() => setIsFullKebabDropdownOpen(!isFullKebabDropdownOpen)}
                  isExpanded={isFullKebabDropdownOpen}
                  variant="plain"
                  aria-label="Toolbar menu"
                  icon={<EllipsisVIcon />}
                />
              )}
            >
              <DropdownGroup key="group 2" aria-label="User actions">
                <DropdownList>{userDropdownItems}</DropdownList>
              </DropdownGroup>
              <Divider />
              <DropdownList>{kebabDropdownItems}</DropdownList>
            </Dropdown>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarItem visibility={{ default: 'hidden', md: 'visible' }}>
          <Dropdown
            isOpen={isDropdownOpen}
            onSelect={() => setIsDropdownOpen(false)}
            onOpenChange={setIsDropdownOpen}
            popperProps={{ position: 'right' }}
            toggle={(toggleRef) => (
              <MenuToggle
                ref={toggleRef}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                isExpanded={isDropdownOpen}
                icon={<Avatar src={imgAvatar} alt="" size="sm" />}
              >
                Ned Username
              </MenuToggle>
            )}
          >
            <DropdownList>{userDropdownItems}</DropdownList>
          </Dropdown>
        </ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const masthead = (
    <Masthead>
      <MastheadMain>
        <MastheadToggle>
          <PageToggleButton variant="plain" aria-label="Global navigation">
            <BarsIcon />
          </PageToggleButton>
        </MastheadToggle>
        <MastheadBrand>
          <MastheadLogo component="a" href="/system/dashboard" aria-label="Go to home page">
            <Brand src={pfLogo} alt="PatternFly" heights={{ default: '36px' }} />
          </MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  // Nav structure
  const systemExpanded = location.pathname.startsWith('/system');
  const nav = (
    <Nav aria-label="Nav">
      <NavList>
        <NavExpandable title="System" isExpanded={systemExpanded} data-testid="nav-expandable-system">
          <NavItem isActive={location.pathname === '/system/dashboard'}>
            <NavLink to="/system/dashboard">
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem isActive={location.pathname === '/system/instances'}>
            <NavLink to="/system/instances">
              Instances
            </NavLink>
          </NavItem>
        </NavExpandable>
        <NavItem isActive={location.pathname === '/settings'}>
          <NavLink to="/settings">
            Settings
          </NavLink>
        </NavItem>
        <NavItem isActive={location.pathname === '/docs'}>
          <NavLink to="/docs">
            Documentation
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );

  const sidebar = (
    <PageSidebar>
      <PageSidebarBody>{nav}</PageSidebarBody>
    </PageSidebar>
  );

  const mainContainerId = 'main-content';

  const handleClick = (event: any) => {
    event.preventDefault();
    const mainContentElement = document.getElementById(mainContainerId);
    if (mainContentElement) {
      mainContentElement.focus();
    }
  };

  const pageSkipToContent = (
    <SkipToContent onClick={handleClick} href={`#${mainContainerId}`}>
      Skip to content
    </SkipToContent>
  );

  return (
    <Page
      masthead={masthead}
      sidebar={sidebar}
      isManagedSidebar
      skipToContent={pageSkipToContent}
      breadcrumb={showBreadcrumbs ? breadcrumbs : undefined}
      mainContainerId={mainContainerId}
      isBreadcrumbWidthLimited
      isBreadcrumbGrouped
      groupProps={{
        stickyOnBreakpoint: { default: 'top' }
      }}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/system/dashboard" replace />} />
        <Route path="/system/dashboard" element={<Dashboard />} />
        <Route path="/system/instances" element={<Instances />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/docs" element={<Documentation />} />
      </Routes>
    </Page>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
