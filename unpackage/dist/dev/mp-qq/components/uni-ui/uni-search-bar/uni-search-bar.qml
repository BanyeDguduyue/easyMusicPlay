<view class="uni-searchbar"><view class="{{['uni-searchbar-form',show?'':'hide']}}"><view class="uni-searchbar-form__box" style="{{'border-radius:'+(radius+'rpx')+';'}}"><uni-icons class="icon-search" vue-id="1" color="#fff" type="search" size="24" bind:__l="__l"></uni-icons><input class="search-input" placeholder="{{placeholder}}" focus="{{show}}" type="text" placeholder-style="color:#cccccc" confirm-type="search" data-event-opts="{{[['confirm',[['confirm',['$event']]]],['input',[['__set_model',['','searchVal','$event',[]]]]]]}}" value="{{searchVal}}" bindconfirm="__e" bindinput="__e"/><block wx:if="{{clearButton==='always'||clearButton==='auto'&&searchVal!==''}}"><uni-icons class="icon-clear" vue-id="2" color="#fff" type="clear" size="24" data-event-opts="{{[['^click',[['clear']]]]}}" bind:click="__e" bind:__l="__l"></uni-icons></block></view><view data-event-opts="{{[['tap',[['searchClick',['$event']]]]]}}" class="uni-searchbar-form__text" style="{{'border-radius:'+(radius+'rpx')+';'}}" bindtap="__e"><uni-icons class="icon-search" vue-id="3" color="#fff" type="search" size="24" bind:__l="__l"></uni-icons><text class="placeholder">{{placeholder}}</text></view><text data-event-opts="{{[['tap',[['cancel',['$event']]]]]}}" class="uni-searchbar-form__cancel" bindtap="__e">取消</text></view></view>