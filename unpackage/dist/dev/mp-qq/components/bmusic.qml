<view class="m_container"><view class="progress"><view class="progress-box"><slider disabled="{{silderdisabled}}" aaa="{{percent}}" value="{{balllocat}}" activeColor="#FFFFFF" backgroundColor="#ccc" block-color="#FFFFFF" block-size="20" data-event-opts="{{[['touchstart',[['touchstart',['$event']]]],['change',[['sliderChange',['$event']]]]]}}" bindtouchstart="__e" bindchange="__e"></slider></view></view><view class="control"><view data-event-opts="{{[['tap',[['openlist',['$event']]]]]}}" class="{{['loop-type',curtype]}}" bindtap="__e"><block wx:if="{{isopenlist}}"><view class="type-list"><block wx:for="{{loop_type}}" wx:for-item="item" wx:for-index="idx" wx:key="idx"><view data-event-opts="{{[['tap',[['choosetype',['$0','$1'],[[['loop_type','',idx,'type']],[['loop_type','',idx,'name']]]]]]]}}" class="{{[item.type]}}" bindtap="__e"></view></block></view></block></view><view data-event-opts="{{[['tap',[['premusic',['$event']]]]]}}" class="pre" bindtap="__e"></view><view data-event-opts="{{[['tap',[['handleMusic',['$event']]]]]}}" class="{{[stoporplay]}}" bindtap="__e"></view><view data-event-opts="{{[['tap',[['nextmusic',['$event']]]]]}}" class="next" bindtap="__e"></view><view data-event-opts="{{[['tap',[['getComment',['$event']]]]]}}" class="comment" bindtap="__e"></view></view></view>