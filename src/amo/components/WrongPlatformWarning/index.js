/* @flow */
import makeClassName from 'classnames';
import { withRouter } from 'react-router-dom';
import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import translate from 'core/i18n/translate';
import { sanitizeHTML } from 'core/utils';
import {
  correctedLocationForPlatform,
  getMobileHomepageLink,
  isAndroidInstallable,
  isFirefoxForAndroid,
  isFirefoxForIOS,
} from 'core/utils/compatibility';
import Notice, { warningInfoType } from 'ui/components/Notice';
import type { AppState } from 'amo/store';
import type { AddonType } from 'core/types/addons';
import type { UserAgentInfoType } from 'core/reducers/api';
import type { I18nType } from 'core/types/i18n';
import type { ReactRouterLocationType } from 'core/types/router';

import './styles.scss';

export const ANDROID_SUMO_LINK_DESTINATION =
  'https://support.mozilla.org/kb/find-and-install-add-ons-firefox-android';

type Props = {|
  addon?: AddonType | null,
  className?: string,
  isHomePage?: boolean,
|};

type InternalProps = {|
  ...Props,
  _correctedLocationForPlatform: typeof correctedLocationForPlatform,
  _isAndroidInstallable: typeof isAndroidInstallable,
  _isFirefoxForAndroid: typeof isFirefoxForAndroid,
  _isFirefoxForIOS: typeof isFirefoxForIOS,
  clientApp: string,
  i18n: I18nType,
  lang: string,
  location: ReactRouterLocationType,
  userAgentInfo: UserAgentInfoType,
|};

export class WrongPlatformWarningBase extends React.Component<InternalProps> {
  static defaultProps = {
    _correctedLocationForPlatform: correctedLocationForPlatform,
    _isAndroidInstallable: isAndroidInstallable,
    _isFirefoxForAndroid: isFirefoxForAndroid,
    _isFirefoxForIOS: isFirefoxForIOS,
    isHomePage: false,
  };

  render() {
    const {
      _correctedLocationForPlatform,
      _isAndroidInstallable,
      _isFirefoxForAndroid,
      _isFirefoxForIOS,
      addon,
      className,
      clientApp,
      i18n,
      isHomePage,
      lang,
      location,
      userAgentInfo,
    } = this.props;

    let message;

    const newLocation = _correctedLocationForPlatform({
      clientApp,
      isHomePage,
      lang,
      location,
      userAgentInfo,
    });

    if (_isFirefoxForIOS(userAgentInfo)) {
      // Firefox for iOS.
      message = i18n.gettext(
        `This add-on is not compatible with this browser. Try installing it on Firefox for desktop.`,
      );
    } else if (
      addon &&
      _isFirefoxForAndroid(userAgentInfo) &&
      _isAndroidInstallable({ addon })
    ) {
      // Compatible with Fenix add-on detail page.
      message = i18n.sprintf(
        i18n.gettext(
          `You can install this add-on in the Add-ons Manager.
          Learn more about <a href="%(newLocation)s">add-ons for Android</a>.`,
        ),
        {
          newLocation: ANDROID_SUMO_LINK_DESTINATION,
        },
      );
    } else if (newLocation === getMobileHomepageLink(lang)) {
      // Redirecting to mobile home page.
      message = i18n.sprintf(
        i18n.gettext(
          `To find add-ons compatible with Firefox for Android,
               <a href="%(newLocation)s">click here</a>.`,
        ),
        { newLocation },
      );
    } else if (addon && newLocation) {
      // User with desktop browser looking at detail page on mobile site.
      message = i18n.sprintf(
        `This listing is not intended for this platform.
        <a href="%(newLocation)s">Browse add-ons for Firefox on desktop</a>.`,
        { newLocation },
      );
    } else if (newLocation) {
      // Redirecting to new page on the desktop site.
      message = i18n.sprintf(
        `To find add-ons compatible with Firefox on desktop,
               <a href="%(newLocation)s">visit our desktop site</a>.`,
        { newLocation },
      );
    }

    return message ? (
      <div className={makeClassName('WrongPlatformWarning', className)}>
        <Notice id="WrongPlatformWarning-Notice" type={warningInfoType}>
          <span
            className="WrongPlatformWarning-message"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={sanitizeHTML(message, ['a'])}
          />
        </Notice>
      </div>
    ) : null;
  }
}

export function mapStateToProps(state: AppState) {
  return {
    clientApp: state.api.clientApp,
    lang: state.api.lang,
    userAgentInfo: state.api.userAgentInfo,
  };
}

const WrongPlatformWarning: React.ComponentType<Props> = compose(
  withRouter,
  connect(mapStateToProps),
  translate(),
)(WrongPlatformWarningBase);

export default WrongPlatformWarning;
