import styles from "./index.module.css";
import {Component} from "solid-js";

type Text = Component<{
	children: string;
}>;

const Text: Text = (_) => {
	return <div class={styles.text}>{_.children}</div>;
};

export default Text;