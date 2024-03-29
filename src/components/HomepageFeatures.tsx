/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import { useMount } from '../utils';
import { useHttp } from '../utils';

type Content = {
  name: string;
  src: string;
}

type FeatureItem = {
  title: string;
  contents: Content[];
};

const FeatureList: FeatureItem[] = [
  {
    title: 'JS 学习',
    contents: [
      {name: "JavaScript 秘密花园", src: "https://bonsaiden.github.io/JavaScript-Garden/zh/"},
      {name: "JS 技巧", src: "https://www.jstips.co"},
      {name: "技术周刊", src: "https://javascriptweekly.comm"},
      {name: "JavaScript 资料库", src: "https://cdnjs.com/libraries"},
      {name: "开源 JS 库集合", src: "https://beautifulopen.com"},
      {name: "代码库集合", src: "https://www.javascript.fun"}
    ]
  },
  {
    title: 'CSS学习',
    contents: [
      {name: "CSS Battle", src: "https://cssbattle.dev"},
      {name: "CSS 布局", src: "http://learnlayout.com"},
      {name: "Flex 布局小游戏", src: "http://flexboxfroggy.com"},
      {name: "CSS可视化工具", src: "https://enjoycss.com"},
      {name: "CSS 技巧", src: "https://css-tricks.com"},
      {name: "新拟态效果", src: "https://neumorphism.io"},
      {name: "CSS 渐变色", src: "https://uigradients.com"}
    ]
  },
  {
    title: 'Nice网站',
    contents: [
      {name: "阮老师博客", src: "http://www.ruanyifeng.com/blog/"},
      {name: "张鑫旭", src: "https://www.zhangxinxu.com"},
      {name: "荒山的掘金", src: "https://juejin.im/user/5762733b2e958a00696163ea/posts"},
      {name: "淘系前端团队", src: "https://fed.taobao.org"},
      {name: "腾讯全端", src: "https://www.alloyteam.com"},
      {name: "FEX - 百度", src: "https://fex.baidu.com"},
      {name: "JELLY DESIGN - 京东", src: "https://elly.jd.com"},
      {name: "CSS-Tricks", src: "https://css-tricks.com"},
    ]
  }
];

function Feature({title, contents}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureItem}>
        <h2 className="text--center">{title}</h2>
        <div className={styles.contentCls}>
          {contents.map((item, idx) => (
            <div className={styles.contentItem} key={idx}>
              <Link target="_blank" to={item.src}>
                {idx+1}. {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function fetchData() {
  // 1.使用浏览器缓存
  // 2.以1小时刷新缓存
  console.log(123)
  useHttp()
}

export default function HomepageFeatures(): JSX.Element {
  useMount(() => {
    fetchData();
  })
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
