<template>
  <CbsLogoHorizontal></CbsLogoHorizontal>
  <!--<div class="slds-context-bar cbs-header__top">-->
    <!--<div class="slds-context-bar__primary slds-context-bar__item&#45;&#45;divider-right">-->
      <!--<div class="slds-context-bar__item slds-no-hover slds-grid&#45;&#45;vertical-align-center">-->
        <!--<div class="slds-context-bar__icon-action">-->
          <!--<a routerLink="/dashboard" class="slds-icon-waffle_container slds-context-bar__button">-->
            <!--<CbsLogoHorizontal></CbsLogoHorizontal>-->
          <!--</a>-->
        <!--</div>-->
        <!--<a routerLink="/dashboard" class="cbs-header__logo-text">-->
          <!--<span class="slds-context-bar__label-action slds-context-bar__app-name">-->
              <!--<span class="slds-truncate" title="OpenCBS">Open<strong>CBS</strong></span>-->
          <!--</span>-->
        <!--</a>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div>-->
      <!--<button class="slds-button slds-m-left&#45;&#45;x-small" (click)="changeLang('en')">En</button>-->
      <!--<button class="slds-button" (click)="changeLang('ru')">Ru</button>-->
      <!--<button class="slds-button" (click)="changeLang('fr')">Fr</button>-->
    <!--</div>-->
  <!--</div>-->
</template>

<script>
import CbsLogoHorizontal from '../CbsLogoHorizontal/CbsLogoHorizontal'

export default {

  components: {
    CbsLogoHorizontal
  },

  name: 'MainHeader'

}
</script>

<style scoped>

</style>
